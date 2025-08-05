import { Container, MantineTheme } from "@mantine/core";

interface QuizContainerProps {
  children: React.ReactNode;
  minHeight?: string;
}

const QuizContainer = ({ children, minHeight }: QuizContainerProps) => {
  return (
    <Container
      bg={"white"}
      miw={"2xl"}
      mih={minHeight || "500px"}
      py="lg"
      px={"md"}
      style={(theme: MantineTheme) => ({
        width: "100%",
        height: "100%",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        borderRadius: theme.radius.xl,
      })}
    >
      {children}
    </Container>
  );
};

export default QuizContainer;
