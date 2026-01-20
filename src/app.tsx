"use client";

import { AppLayout } from "./components/layout";
import { HomePage } from "./presentations/home";

export const App: React.FC = () => {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
};
