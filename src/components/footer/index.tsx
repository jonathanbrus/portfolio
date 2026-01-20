import React from "react";
import { Stack, Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { NavLink } from "../nav-link";
import { icons } from "../../icons";

export const Footer: React.FC = () => {
  return (
    <Stack component="div" id="contact" sx={{ backgroundColor: "primary.dark" }}>
      <Container
        sx={{
          px: { xs: "1.6rem", sm: "2.6rem" },
          py: "3rem",
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", mt: "1rem" }}>
              <Typography sx={{ fontSize: { xs: "2.2rem", sm: "2.6rem" }, fontWeight: "bold" }}>Jonathan</Typography>
              <Box component="span" sx={{ width: "0.4rem" }}></Box>
              <Typography sx={{ fontSize: { xs: "2.2rem", sm: "2.6rem" } }}>Brus</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ ml: "0.1rem", mb: "0.6rem" }}>
              Full-Stack Developer
            </Typography>
            <Box sx={{ ml: "-0.9rem" }}>
              {socials.map(({ icon, link }) => (
                <IconButton key={link} onClick={() => window.open(link)} sx={{ p: "1rem" }}>
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>
          <Box sx={{ flex: 1.4 }}>
            <Typography sx={{ my: "0.3rem", fontSize: { xs: "2.2rem", sm: "2.6rem" }, fontWeight: "bold" }}>
              Let's Talk!
            </Typography>
            <Typography variant="body1" sx={{ my: "0.8rem" }}>
              I am always open to discuss your project, Start saying Hi!
            </Typography>
            <Typography sx={{ my: "0.6rem" }}>
              <Box component="span" sx={{ mr: "0.6rem" }}>
                {icons.mail}
              </Box>{" "}
              jonathanbrus26@gmail.com
            </Typography>
            <Typography>
              <Box component="span" sx={{ mr: "0.6rem" }}>
                {icons.phone}
              </Box>{" "}
              +971 505039268
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "whitesmoke", my: "3rem" }} />
        <Box sx={{ display: { xs: "block", sm: "flex" }, alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {navlinks.map(({ hash, title }) => (
              <NavLink
                key={hash}
                pathname="/"
                hash={hash}
                title={title}
                sx={{ mr: "1.4rem", ml: { xs: "1.4rem", sm: 0 } }}
              />
            ))}
          </Box>
          <Typography sx={{ mt: { xs: "2rem", sm: "auto" }, fontSize: "0.8rem", textAlign: "center" }}>
            © 2022 All rights reserved
          </Typography>
        </Box>
      </Container>
    </Stack>
  );
};

const socials = [
  { icon: icons.linkedIn, link: "https://www.linkedin.com/in/jonathan-brus-591a631b7" },
  { icon: icons.instagram, link: "https://www.instagram.com/jonathanbrus._/?hl=en" },
];

const navlinks = [
  { hash: "about", title: "About" },
  { hash: "skills", title: "Skills" },
  { hash: "works", title: "Works" },
];

export default Footer;
