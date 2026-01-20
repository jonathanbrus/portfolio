"use client";

import { Stack } from "@mui/material";
import { HeroSection } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Works } from "./components/works";

export const HomePage: React.FC = () => {
  return (
    <Stack>
      <HeroSection />
      <About />
      <Skills />
      <Works />
    </Stack>
  );
};
