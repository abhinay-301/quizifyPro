import { Button, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import { useNavigate } from "react-router";
import useQuizStore from "../store/quize-store";

const QuizStartPage = () => {
  const { quizData } = useQuizStore();
  const navigate = useNavigate();
  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        fw={"bold"}
        fz={{ base: "2rem", md: "3rem", lg: "2rem" }}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Quiz Start Page
      </Text>
      <Text fw={500} fz={16}>
        {quizData.title}{" "}
      </Text>
      <Text fw={500} fz={16}>
        {quizData.description}
      </Text>
      <Text>You should get {quizData.passScore} correct answers to pass!</Text>
      <Button
        variant="gradient"
        miw={"200px"}
        onClick={() => {
          navigate("/start-quiz");
        }}
        size="md"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Start Quiz
      </Button>
    </QuizContainer>
  );
};

export default QuizStartPage;
