import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#181823",
    secondary: "#46464F",
  },
  primary: {
    main: "#5221e6",
    light: "#744deb",
    dark: "#3917A1",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#181823",
    light: "#46464F",
    dark: "#101018",
    contrastText: "#ffffff",
  },
  // ... other palettes remain similar or default for now
  divider: "rgba(0, 0, 0, 0.12)",
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#000000",
    paper: "#424242",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
  },
  primary: {
    main: "#5221e6",
    light: "#744deb",
    dark: "#3917A1",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ffffff", // In dark mode, secondary usually contrasts well
    light: "#f5f5f5",
    dark: "#cccccc",
    contrastText: "#000000",
  },
  divider: "rgba(255, 255, 255, 0.12)",
};
