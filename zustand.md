Here's a **step-by-step guide** to managing **global state using Zustand** in React, based on your use case.

---

## 🧭 Step-by-Step Guide: Global State Management with Zustand

### ✅ Step 1: Install Zustand

```bash
npm install zustand
# Optional for persistence
npm install zustand/middleware
```

---

### ✅ Step 2: Define Types (Optional but Recommended)

If you're using TypeScript, define interfaces for your state and data:

```ts
export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

export interface UserAnswer {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
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
  setUserName: (name: string) => void;
  setUserAnswer: (answers: UserAnswer[]) => void;
  setQuizData: (data: QuizCategory) => void;
  resetUserAnswers: () => void;
  resetAll: () => void;
}
```

---

### ✅ Step 3: Create the Zustand Store

Use `create` from Zustand to define your global state and actions:

```ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      userName: "",
      userAnswers: [],
      quizData: {
        category: "",
        title: "",
        description: "",
        passScore: 0,
        quizzes: [],
      },

      // Actions
      setUserName: (name) => set({ userName: name }),
      setUserAnswer: (answers) => set({ userAnswers: answers }),
      setQuizData: (data) => set({ quizData: data }),
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
      name: "quiz-storage", // LocalStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useQuizStore;
```

---

### ✅ Step 4: Use Store in Components

You can use the global state **anywhere** without needing a `<Provider>`.

Example:

```tsx
import useQuizStore from "./store/useQuizStore";

function QuizComponent() {
  const { userName, setUserName, resetAll } = useQuizStore();

  return (
    <>
      <p>User: {userName}</p>
      <button onClick={() => setUserName("Abhinay")}>Set Name</button>
      <button onClick={resetAll}>Reset</button>
    </>
  );
}
```

You can also use **partial state** to avoid re-renders:

```ts
const userName = useQuizStore((state) => state.userName);
```

---

### ✅ Step 5: Persistence (Optional)

You're already using `persist()` middleware which saves and loads state from `localStorage` automatically.

To reset persisted storage manually:

```ts
useQuizStore.persist.clearStorage();
```

---

## ✅ Summary: Zustand Global State Setup

| Step                | What You Do                    | Purpose                      |
| ------------------- | ------------------------------ | ---------------------------- |
| 1. Install          | `npm install zustand`          | Add Zustand to project       |
| 2. Define Types     | Interfaces for state & actions | Type safety                  |
| 3. Create Store     | `create((set) => ...)`         | Define state, actions        |
| 4. Add Middleware   | `persist(...)`                 | Save to `localStorage`       |
| 5. Use in Component | `useQuizStore()`               | Read & update state globally |

---

Let me know if you'd like an example with Zustand + React Router, Zustand + Next.js, or Zustand + async API calls.
