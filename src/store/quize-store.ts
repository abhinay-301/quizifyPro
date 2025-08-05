import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserAnswer {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizCategory {
  category: string;
  title: string;
  description: string;
  passScore: number;
  quizzes: Quiz[];
}

export interface QuizState {
  userName: string;
  userAnswers: UserAnswer[];
  quizData: QuizCategory;

  // Actions to update the state
  setUserName: (name: string) => void;
  setUserAnswer: (answer: UserAnswer[]) => void;
  setQuizData: (data: QuizCategory) => void;
  resetUserAnswers: () => void;
  resetAll: () => void;
}

const useQuizStore = create<QuizState>()(// create():methods to create store
  persist(// saves state to localStorage
    (set) => ({// set : internal methods to update state
      userName: "",
      userAnswers: [],
      quizData: {
        category: "",
        title: "",
        description: "",
        passScore: 0,
        quizzes: [],
      },

      // Actions to update the state

      setUserName: (name: string) => set({ userName: name }),
      setUserAnswer: (answers: UserAnswer[]) => set({ userAnswers: answers }),
      setQuizData: (data: QuizCategory) => set({ quizData: data }),
      resetUserAnswers: () => set({ userAnswers: [] }),
      resetAll: () =>
        set({
          userName: "",
          userAnswers: [],
          quizData: {
            category: "",
            title: "",
            description: "",
            passScore: 0,
            quizzes: [],
          },
        }),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useQuizStore;
