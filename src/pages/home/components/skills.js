import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { skills } from "../../../_data/skills";

export const Skills = (props) => {
  return (
    <Box component="div" id="skills">
      <Container
        sx={{
          px: { xs: "1.6rem", sm: "2.6rem" },
          py: "3rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ my: "0.3rem", fontSize: { xs: "2.2rem", sm: "2.6rem" }, fontWeight: "bold" }}>What I'm Familiar With.</Typography>
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mt: { xs: "0.8rem", sm: "1.6rem" } }}>
          {skills.map((skill) => (
            <Grid item xs={4} sm={4} md={3} lg={2} key={skill.title} sx={{ height: { xs: "9rem", md: "14rem" }, display: "grid", placeItems: "center" }}>
              <Box
                sx={{
                  width: { xs: "2.2rem", sm: "3.6rem" },
                  height: { xs: "2.2rem", sm: "3.6rem" },
                  padding: { xs: "1.2rem", md: "1.8rem" },
                  border: "3.6px solid",
                  borderColor: "primary.dark",
                  borderRadius: "36%",
                  transition: "all ease-in 300ms",
                }}
              >
                {skill.icon}
              </Box>
              <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
                {skill.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
