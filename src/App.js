import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppLayout } from "./components/layout";
import { HomePage } from "./pages/home";
import { ProjectDetailsPage } from "./pages/projects/project-details";
import { ProjectsPage } from "./pages/projects";

export const App = (props) => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:name" element={<ProjectDetailsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AppLayout>
  );
};
