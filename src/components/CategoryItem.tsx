import { Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface CategoryItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  active: boolean;
}

const CategoryItem = ({ icon, title, onClick, active }: CategoryItemProps) => {
  const { hovered, ref } = useHover();
  return (
    <Flex
      onClick={onClick}
      ref={ref}
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"xs"}
      p={"md"}
      style={{
        border: "1px solid",
        borderColor: active ? "red" : "#fff",
        borderRadius: "10px",
        padding: "10px",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "none",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        cursor: "pointer",
      }}
    >
      {icon}
      <Text>{title}</Text>
    </Flex>
  );
};

export default CategoryItem;
