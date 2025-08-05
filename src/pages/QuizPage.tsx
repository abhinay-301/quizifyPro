import { Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import QuizCard from "../components/QuizCard";
import useQuizStore from "../store/quize-store";
import { useState } from "react";
import { useNavigate } from "react-router";

const QuizPage = () => {
  const { quizData, userAnswers, setUserAnswer } = useQuizStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = quizData.quizzes[currentQuestionIndex];

  return (
    <QuizContainer>
      <Text fz={"2rem"} fw={"bold"} ta={"center"}>
        {quizData.title}
      </Text>
      <Text fz={"1.5rem"} ta={"center"}>
        {currentQuestionIndex + 1} / {quizData.quizzes.length}
      </Text>

      <QuizCard
        onAnswer={(answer) => {
          if (userAnswers[currentQuestionIndex]?.answer === answer) return;

          const updatedAnswers = [...userAnswers];

          updatedAnswers[currentQuestionIndex] = {
            question: currentQuestion.question,
            answer,
            isCorrect: answer === currentQuestion.answer,
            correctAnswer: currentQuestion.answer,
          };

          setUserAnswer(updatedAnswers);
        }}
        isLastQuestion={currentQuestionIndex === quizData.quizzes.length - 1}
        onNext={() => {
          if (currentQuestionIndex < quizData.quizzes.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
          }
          if (currentQuestionIndex === quizData.quizzes.length - 1) {
            navigate("/result");
          }
        }}
        options={currentQuestion.options}
        question={currentQuestion.question}
      />
    </QuizContainer>
  );
};

export default QuizPage;
