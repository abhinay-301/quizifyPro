import { Button, Flex, Text } from "@mantine/core";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface QuizCardProps {
  question: string;
  options: string[];
  isLastQuestion: boolean;

  onAnswer: (answer: string) => void;
  onNext: () => void;
}

const QuizCard = ({
  question,
  options,
  isLastQuestion,

  onAnswer,
  onNext,
}: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  return (
    <Flex miw={"90%"} direction={"column"} gap={10}>
      <Text size={"xl"} fw={500} my={"md"}>
        {question}
      </Text>
      <Flex direction={"column"} gap={10}>
        {options.map((option, index) => (
          <Button
            onClick={() => {
              setSelectedAnswer(option);
              onAnswer(option);
            }}
            c={selectedAnswer === option ? "white" : "gray"}
            key={index}
            bd={"0.5px solid deeppink"}
            variant={selectedAnswer === option ? "gradient" : "outline"}
            gradient={{ from: "red", to: "deeppink" }}
            radius={"xl"}
            size={"lg"}
          >
            {option}
          </Button>
        ))}
        <Flex gap={10} justify={"end"} mt={10}>
          <Button
            variant="gradient"
            gradient={{ from: "red", to: "deeppink" }}
            radius={"xl"}
            size={"md"}
            onClick={onNext}
            rightSection={<FaArrowRight />}
          >
            {isLastQuestion ? "Submit" : "Next"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuizCard;
