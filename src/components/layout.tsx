import { Box } from "@mui/material";
import { AppBar } from "./appbar";
import { Footer } from "./footer";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box component="main" sx={styles.main}>
      <AppBar />
      <Box sx={styles.child}>{children}</Box>
      <Footer />
    </Box>
  );
};

const styles = {
  main: {
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    background: "black",
  },
  child: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
};
