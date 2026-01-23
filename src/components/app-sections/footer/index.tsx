import React from "react";
import { Stack, Container, Divider, IconButton, Typography } from "@mui/material";
import { NavLink } from "../../bases/nav-link";
import { icons } from "../../icons";

export const Footer: React.FC = () => {
  return (
    <Stack component="div" id="contact" sx={{ backgroundColor: "background.default", color: "text.primary" }}>
      <Container
        sx={{
          px: { xs: "1.6rem", sm: "2.6rem" },
          py: "3rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Stack sx={{ flex: 1, gap: "0.5rem" }}>
            <Typography variant="subtitle1" sx={{ color: "primary.main" }}>
              Full-Stack Developer
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center", gap: "0.5rem" }}>
              <Typography sx={{ fontSize: { xs: "2.2rem", sm: "2.6rem" }, fontWeight: "bold" }}>Jonathan</Typography>
              <Typography sx={{ fontSize: { xs: "2.2rem", sm: "2.6rem" } }}>Brus</Typography>
            </Stack>

            <Stack direction="row" sx={{ marginLeft: "-0.5rem" }}>
              {socials.map(({ icon, link }) => (
                <IconButton key={link} onClick={() => window.open(link)} sx={{ p: "1rem" }}>
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>

          <Stack sx={{ flex: 1.5, gap: "2rem" }}>
            <Stack>
              <Typography sx={{ fontSize: { xs: "2.2rem", sm: "2.6rem" }, fontWeight: "bold", color: "primary.main" }}>
                Let's Talk!
              </Typography>
              <Typography variant="body1">I am always open to discuss your project, Start saying Hi!</Typography>
            </Stack>

            <Stack sx={{ gap: "0.5rem" }}>
              <Typography>
                <Stack component="span" sx={{ marginRight: "0.5rem", display: "inline-flex" }}>
                  {icons.mail}
                </Stack>{" "}
                jonathanbrus26@gmail.com
              </Typography>
              <Typography>
                <Stack component="span" sx={{ marginRight: "0.5rem", display: "inline-flex" }}>
                  {icons.phone}
                </Stack>{" "}
                +971 507743309
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ backgroundColor: "divider", my: "3rem" }} />

        <Stack
          direction="row"
          sx={{ display: { xs: "block", sm: "flex" }, alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            {navlinks.map(({ hash, title }) => (
              <NavLink
                key={hash}
                title={title}
                pathname="/"
                hash={hash}
                sx={{ marginLeft: { xs: "1.5rem", sm: 0 }, marginRight: "1.5rem" }}
              />
            ))}
          </Stack>
          <Typography sx={{ mt: { xs: "2rem", sm: "auto" }, fontSize: "0.8rem", textAlign: "center" }}>
            © 2026 All rights reserved
          </Typography>
        </Stack>
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
