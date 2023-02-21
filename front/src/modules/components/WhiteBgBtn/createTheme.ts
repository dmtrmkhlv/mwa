import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const themeButton = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeightLight: 400,
  },
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#F7941E",
    },
  },
});
