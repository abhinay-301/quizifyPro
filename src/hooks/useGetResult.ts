import useQuizStore from "../store/quize-store";

function calculateAccuracy(correctAnswers: number, totalQuestions: number) {
  if (totalQuestions === 0) return 0;

  return (correctAnswers / totalQuestions) * 100;
}

const useGetResult = () => {
  const { userAnswers, quizData } = useQuizStore();

  const correctAnswers = userAnswers.filter((a) => a.answer && a.isCorrect);

  const correctAnswersCount = correctAnswers.length;
  const incorrectAnswersCount = userAnswers.length - correctAnswersCount;
  const accuracy = calculateAccuracy(correctAnswersCount, userAnswers.length);

  const passed =
    quizData.passScore >= accuracy || correctAnswersCount >= quizData.passScore;

  const totalQuestions = userAnswers.length;

  return {
    correctAnswersCount,
    correctAnswers,
    accuracy,
    passed,
    totalQuestions,
    incorrectAnswersCount,
  };
};

export default useGetResult;
