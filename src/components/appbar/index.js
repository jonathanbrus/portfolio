import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MUIAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MUIAvatar from "@mui/material/Avatar";
import { NavLink } from "../nav-link";

export const AppBar = () => {
  return (
    <>
      <MUIAppBar sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ px: { xs: 0, sm: 0, md: 0, lg: 0 }, py: { xs: "1rem", sm: "0.6rem" } }}>
          <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Jonathan</Typography>
                <Box component="span" sx={{ width: "0.4rem" }}></Box>
                <Typography sx={{ fontSize: "1.6rem" }}>Brus</Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navlinks.map(({ hash, title }) => (
                <NavLink key={hash} pathname="/" hash={hash} title={title} sx={{ ml: "1.4rem" }} />
              ))}
            </Box>
          </Container>
        </Toolbar>
      </MUIAppBar>
      <Toolbar sx={{ py: { xs: "1rem", sm: "0.6rem" } }} />
    </>
  );
};

const Avatar = () => {
  const size = "3rem";
  return (
    <MUIAvatar sx={{ width: size, height: size, mr: "1rem" }}>
      <Typography variant="h5" sx={{ color: "text.primary" }}>
        J
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
