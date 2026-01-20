"use client";

import { createTheme } from "@mui/material/styles";
import { colourPaletteOptions } from "./colour-palette";
import { typographyOptions } from "./typography";

export const theme = createTheme({
  spacing: 16,

  palette: colourPaletteOptions,

  typography: typographyOptions,

  shape: {
    borderRadius: 4,
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        size: "small",
      },
    },

    MuiList: {
      defaultProps: {
        dense: true,
      },
    },

    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },

    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },

    MuiButtonGroup: {
      defaultProps: {
        size: "small",
      },
    },

    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },
    },

    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },

    MuiFormControl: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },

    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },

    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },

    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
    },

    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },

    MuiRadio: {
      defaultProps: {
        size: "small",
      },
    },

    MuiSwitch: {
      defaultProps: {
        size: "small",
      },
    },

    MuiTextField: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },

    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
  },
});
