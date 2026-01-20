import { Box, SxProps, Typography } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export const NavLink: React.FC<{ pathname: string; hash: string; title: string; sx: SxProps }> = ({
  pathname = "",
  hash = "",
  title = "",
  sx,
}) => {
  const router = useRouter();
  const currentPagePathname = usePathname();

  const handleNavigate = () => {
    if (currentPagePathname !== pathname) {
      router.push(pathname);
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
