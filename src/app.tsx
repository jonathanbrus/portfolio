"use client";

import { AppLayout } from "./components/layout";
import { HomePage } from "./pages/home";

export const App: React.FC = () => {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
};
