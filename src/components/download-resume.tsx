import React from "react";
import { Button } from "@mui/material";

export const DownloadResume: React.FC = React.memo(function DownloadResume() {
  return (
    <Button
      sx={{
        padding: "0.25rem 1rem",
        border: 1,
        borderRadius: "3rem",
        borderWidth: "2px",
        borderColor: "transparent",
        ":hover": {
          borderColor: "primary.light",
          boxShadow: "0px 0px 8px 2px #5d3ebc",
        },
      }}
      href="/assets/resume.pdf"
      download
    >
      download my resume
    </Button>
  );
});
