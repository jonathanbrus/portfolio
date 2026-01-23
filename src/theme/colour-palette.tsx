import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  background: {
    default: "#fbfbfe", // User Background
    paper: "#FFFFFF",
  },
  text: {
    primary: "#050315", // User Text
    secondary: "#2b2b35", // Derived softer text
  },
  primary: {
    main: "#693efe", // Rich Purple (1st Color)
    light: "#f0afff", // Pastel Pink (2nd Color)
    dark: "#2a00c6",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#3fbea7", // Teal (3rd Color)
    light: "#76f1d8",
    dark: "#008d78",
    contrastText: "#000000",
  },
  divider: "rgba(105, 62, 254, 0.08)", // Tinted purple divider
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#1e1926", // Deep Purple-Black (4th Color)
    paper: "#2a2438", // Lighter tinted paper
  },
  text: {
    primary: "#fbfbfe", // Keep clean white text
    secondary: "#dedcff", // Keep soft purple-tinted secondary text
  },
  primary: {
    main: "#693efe", // Rich Purple
    light: "#f0afff", // Pastel Pink
    dark: "#2a00c6",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#3fbea7", // Teal
    light: "#76f1d8",
    dark: "#008d78",
    contrastText: "#000000",
  },
  divider: "rgba(240, 175, 255, 0.12)", // Tinted pink divider
};
