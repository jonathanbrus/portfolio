"use client";

import { Stack } from "@mui/material";
import { AppBar } from "../app-sections/appbar";
import { Footer } from "../app-sections/footer";

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Readonly<IMainLayoutProps>> = (props) => {
  const { children } = props;

  return (
    <Stack component="main" sx={{ minHeight: "100vh", minWidth: "100%", bgcolor: "background.default", color: "text.primary" }}>
      <AppBar />
      <Stack sx={{ flex: 1 }}>{children}</Stack>
      <Footer />
    </Stack>
  );
};
