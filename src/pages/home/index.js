import React from "react";

import { HeroSection } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Works } from "./components/works";

export const HomePage = (props) => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Works />
    </>
  );
};
