import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import MUIAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MUIAvatar from "@mui/material/Avatar";
import { NavLink } from "../nav-link";

export const AppBar: React.FC = () => {
  return (
    <Stack>
      <MUIAppBar sx={{ backgroundColor: "black" }}>
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
              <Stack direction={{ xs: "column", sm: "row" }} sx={{ display: { xs: "none", sm: "flex" } }}>
                {navlinks.map(({ hash, title }) => (
                  <NavLink key={hash} pathname="/" hash={hash} title={title} sx={{ ml: "1.4rem" }} />
                ))}
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
      <Typography variant="h6" sx={{ color: "text.primary" }}>
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
