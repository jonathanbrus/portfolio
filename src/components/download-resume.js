import { Button } from "@mui/material";

export const DownloadResume = () => {
  return (
    <Button
      sx={{
        padding: "0.36rem 1rem 0.26rem 1rem",
        border: 1,
        borderWidth: "2px",
        borderRadius: "3rem",
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
};
