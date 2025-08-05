import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

interface MantineUIProviderProps {
  children: React.ReactNode;
}

export default function MantineUIProvider({
  children,
}: MantineUIProviderProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
