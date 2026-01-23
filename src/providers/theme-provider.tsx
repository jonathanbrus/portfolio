"use client";

import React, { createContext, useMemo, useState, useContext, useEffect } from "react";
import { ThemeProvider, PaletteMode } from "@mui/material";
import { getTheme } from "@/theme";

interface IThemeContext {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

const ColorModeContext = createContext<IThemeContext>({
  toggleColorMode: () => {},
  mode: "dark",
});

export const useColorMode = () => useContext(ColorModeContext);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
