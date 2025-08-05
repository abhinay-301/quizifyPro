import { Box } from "@mantine/core";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      mih={"100vh"}
      display={"flex"}
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "normal",
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
