import { IconButton, Stack, Container, AppBar as MUIAppBar, Toolbar, Avatar as MUIAvatar, Typography, useTheme } from "@mui/material";
import { NavLink } from "../../bases/nav-link";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useColorMode } from "@/providers/theme-provider";

export const AppBar: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Stack>
      <MUIAppBar sx={{ backgroundColor: "background.paper", color: "text.primary" }}>
        <Toolbar sx={{ px: { xs: 0 } }}>
          <Container>
            <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
              <Stack direction="row" sx={{ alignItems: "center", gap: "1.5rem" }}>
                <Avatar />

                <Stack direction="row" sx={{ alignItems: "center", gap: "0.5rem" }}>
                  <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Jonathan</Typography>
                  <Typography sx={{ fontSize: "1.6rem" }}>Brus</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" gap={2}>
                 <Stack direction={{ xs: "column", sm: "row" }} sx={{ display: { xs: "none", sm: "flex" } }}>
                  {navlinks.map(({ hash, title }) => (
                    <NavLink key={hash} pathname="/" hash={hash} title={title} sx={{ ml: "1.4rem" }} />
                  ))}
                </Stack>
                <IconButton onClick={toggleColorMode} color="inherit">
                  {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </MUIAppBar>
      <Toolbar />
    </Stack>
  );
};

const Avatar: React.FC = () => {
  const size = "2.5rem";
  return (
    <MUIAvatar sx={{ width: size, height: size, backgroundColor: "primary.main" }}>
      <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
        JB
      </Typography>
    </MUIAvatar>
  );
};

const navlinks = [
  { hash: "about", title: "About" },
  { hash: "skills", title: "Skills" },
  { hash: "works", title: "Works" },
  { hash: "contact", title: "Contact" },
];
