import { Center, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";

const PageNotFound = () => {
  return (
    <QuizContainer minHeight="100px">
      <Center>
        <Text
          fw={"bold"}
          variant="gradient"
          fz={{ base: "2rem", md: "3rem", lg: "2rem" }}
          gradient={{ from: "red", to: "deeppink", deg: 45 }}
        >
          Page Not Found
        </Text>
      </Center>
    </QuizContainer>
  );
};

export default PageNotFound;
