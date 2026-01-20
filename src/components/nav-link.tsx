import { SxProps, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface INavLinkProps {
  title: string;
  pathname: string;
  hash: string;
  sx: SxProps;
}

export const NavLink: React.FC<Readonly<INavLinkProps>> = (props) => {
  const { title = "", pathname = "", hash = "", sx } = props;

  return (
    <Stack sx={{ cursor: "pointer", ...sx }}>
      <Link href={pathname + hash ? `#${hash}` : ""}>
        <Typography>{title}</Typography>
      </Link>
    </Stack>
  );
};
