"use client";

import { Stack, Container } from "@mui/material";

interface IEngineeringLogsLayoutProps {
  children: React.ReactNode;
}

export const EngineeringLogsLayout: React.FC<Readonly<IEngineeringLogsLayoutProps>> = (props) => {
  const { children } = props;

  return (
    <Stack sx={{ flex: 1 }}>
      <Container sx={{ color: "white" }}>{children}</Container>
    </Stack>
  );
};
