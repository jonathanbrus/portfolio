"use client";

import { Stack } from "@mui/material";
import { AppBar } from "../app-sections/appbar";
import { Footer } from "../app-sections/footer";

interface IAppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Readonly<IAppLayoutProps>> = (props) => {
  const { children } = props;

  return (
    <Stack component="main" sx={{ minHeight: "100vh", minWidth: "100%", background: "black" }}>
      <AppBar />
      <Stack sx={{ flex: 1 }}>{children}</Stack>
      <Footer />
    </Stack>
  );
};
