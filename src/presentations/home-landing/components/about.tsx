import React from "react";
import { Stack, Container, Typography } from "@mui/material";
import { DownloadResume } from "@/components/bases/download-resume";

export const About: React.FC = React.memo(() => {
  return (
    <Stack sx={{ backgroundColor: "primary.dark" }}>
      <Container component="div" id="about" sx={{ marginY: "3rem", color: "white" }}>
        <Stack direction={{ xs: "column", md: "row" }} sx={{ minHeight: "60vh", alignItems: "center" }}>
          <Stack sx={{ flex: 1, alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Stack
              component="img"
              src="/assets/about.png"
              sx={{ width: { xs: "66%", sm: "50%", md: "88%", lg: "66%" }, mb: { xs: "3rem", md: "auto" } }}
            />
          </Stack>

          <Stack sx={{ flex: 1.5, gap: "1rem" }}>
            <Stack sx={{ gap: "1rem" }}>
              <Stack>
                <Typography variant="subtitle1" sx={{ color: "#CCCCCC", textTransform: "uppercase" }}>
                  who is jonathan brus
                </Typography>
                <Typography sx={{ fontSize: { xs: "2.2rem", sm: "2.8rem" }, fontWeight: "bold" }}>
                  A Bit About Me
                </Typography>
              </Stack>

              <Stack sx={{ gap: "1rem" }}>
                <Typography variant="body1">
                  I'm a full-stack developer, passionate about bringing both the technical and visual aspects of digital
                  products to life. User experience, beautiful pixels, and writing clean, readable and maintainable code
                  matters to me. I'm a self-taught and always stay updated with the technologies I use to build
                  softwares and deliver the best.
                </Typography>
                <Typography variant="body1">
                  I'm happiest when I'm exploring, learning, creating and thinking about how to make things better.
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={{ alignItems: "flex-start" }}>
              <DownloadResume />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
});
