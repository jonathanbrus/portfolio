import { Stack, Container, Grid, Typography } from "@mui/material";
import { skills } from "@/core/_data/skills";

export const Skills: React.FC = () => {
  return (
    <Container component="div" id="skills">
      <Stack sx={{ marginY: "3rem", color: "white" }}>
        <Typography sx={{ fontSize: { xs: "4rem", sm: "2.6rem" }, fontWeight: "bold" }}>
          What I'm Familiar With.
        </Typography>

        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          spacing={2}
          sx={{ marginTop: { xs: "0.8rem", sm: "1.6rem" } }}
        >
          {skills.map((skill) => {
            const { Icon } = skill;

            return (
              <Grid
                key={skill.title}
                size={{ xs: 4, sm: 4, md: 3, lg: 2 }}
                sx={{ height: { xs: "9rem", md: "12rem" }, display: "grid", placeItems: "center" }}
              >
                <Stack
                  sx={{
                    height: { xs: "4rem", sm: "6rem" },
                    width: { xs: "4rem", sm: "6rem" },
                    alignItems: "center",
                    justifyContent: "center",
                    border: "4px solid",
                    borderColor: "primary.dark",
                    borderRadius: "36%",
                    transition: "all ease-in 300ms",
                    "&:hover": {
                      borderColor: "primary.light",
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      height: { xs: "2rem", sm: "3rem" },
                      width: { xs: "2rem", sm: "3rem" },
                    }}
                  >
                    <Icon style={{ height: "100%", width: "100%" }} />
                  </Stack>
                </Stack>

                <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
                  {skill.title}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};
