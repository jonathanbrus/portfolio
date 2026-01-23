import React from "react";
import { Typography, Container, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { jobExperiences } from "@/core/_data/experiences";

export const Works: React.FC = React.memo(() => {
  return (
    <Stack component="div" id="works" sx={{ backgroundColor: "background.paper" }}>
      <Container
        sx={{
          px: { xs: "1.6rem", sm: "2.6rem" },
          pb: "3rem",
          display: "flex",
          flexDirection: "column",
          color: "text.primary",
        }}
      >
        <Typography sx={{ my: "0.3rem", fontSize: { xs: "2.2rem", sm: "2.6rem" }, fontWeight: "bold" }}>
          Works
        </Typography>

        <JobExperiences />
      </Container>
    </Stack>
  );
});

export const JobExperiences: React.FC = React.memo(() => {
  return (
    <Stack>
      <Timeline position="alternate">
        {jobExperiences.map((experience, i) => {
          return (
            <TimelineItem key={experience.duration} sx={{ "::before": { content: "none" } }}>
              <TimelineOppositeContent>
                <Typography variant="caption">
                  {experience.duration}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot color={i === 0 ? "secondary" : "primary"} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ my: "1.3rem" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  {experience.company}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "text.secondary", my: "0.2rem" }}>
                  {experience.designation}
                </Typography>
                <Typography variant="body1" sx={{ mt: "1rem" }}>
                  {experience.responsibilities}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Stack>
  );
});
