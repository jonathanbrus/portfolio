import { Box, Container, Typography } from "@mui/material";

import { DownloadResume } from "../../../components/download-resume";

export const About = (props) => {
  return (
    <Box component="div" id="about" sx={{ backgroundColor: "primary.dark" }}>
      <Container
        sx={{
          minHeight: "60vh",
          px: { xs: "1.6rem", sm: "2.6rem" },
          py: "3rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Box component="img" src="/assets/about.png" sx={{ width: { xs: "66%", sm: "50%", md: "88%", lg: "66%" }, mb: { xs: "3rem", md: "auto" } }} />
        </Box>
        <Box sx={{ flex: 1.3 }}>
          <Typography variant="subtitle1" sx={{ color: "#CCCCCC", textTransform: "uppercase" }}>
            who is jonathan brus
          </Typography>
          <Typography sx={{ my: "0.3rem", fontSize: { xs: "2.2rem", sm: "2.8rem" }, fontWeight: "bold" }}>A Bit About Me</Typography>
          <Typography variant="body1" sx={{ my: "0.8rem" }}>
            I'm a full-stack developer, passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful
            pixels, and writing clean, readable and maintainable code matters to me. I'm a self-taught and always stay updated with the technologies I use to
            build softwares and deliver the best.
          </Typography>
          <Typography variant="body1">I'm happiest when I'm exploring, learning, creating and thinking about how to make things better.</Typography>
          <Box sx={{ mt: "2rem" }}>
            <DownloadResume />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
