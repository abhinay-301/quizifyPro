import { Flex, Text } from "@mantine/core";

interface ActionIconProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionIcon = ({ icon, label }: ActionIconProps) => {
  return (
    <Flex align={"center"} justify={"center"} direction={"column"} gap={"xs"}>
      {icon}
      <Text fz={"lg"} fw={"bold"} lts={0.5}>
        {label}
      </Text>
    </Flex>
  );
};

export default ActionIcon;
