import React from "react";
import { Stack, Container, Typography } from "@mui/material";

export const HeroSection: React.FC = React.memo(function HeroSection() {
  return (
    <Container sx={{ color: "white" }}>
      <Stack sx={{ minHeight: "68vh", justifyContent: "center", alignItems: "flex-start" }}>
        <Typography
          sx={{
            width: { xs: "100%", md: "66%" },
            fontSize: { xs: "2.3rem", sm: "3rem", md: "3.6rem" },
            fontWeight: "bolder",
          }}
        >
          Building digital products, brands{" "}
          <Stack component="span" sx={{ display: "inline-flex", color: "primary.light" }}>
            & experience.
          </Stack>
        </Typography>

        <Typography
          sx={{
            marginY: { xs: "1.75rem", sm: "1.5rem" },
            width: { xs: "86%", sm: "56%" },
          }}
        >
          A lifelong learner 🎓 exploring and creating products that bring a change 🚀✨
        </Typography>
      </Stack>
    </Container>
  );
});
