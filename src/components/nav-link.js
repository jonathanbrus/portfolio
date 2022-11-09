import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const NavLink = ({ pathname = "", hash = "", title = "", sx }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    if (location.pathname !== pathname) {
      navigate({ pathname });
    }

    if (hash.length > 0) {
      const element = document.getElementById(hash);

      if (!element) return;

      window.scrollTo({ behavior: "smooth", top: element.offsetTop - 80 });
    }
  };

  return (
    <Box onClick={handleNavigate} sx={{ cursor: "pointer", ...sx }}>
      <Typography>{title}</Typography>
    </Box>
  );
};
