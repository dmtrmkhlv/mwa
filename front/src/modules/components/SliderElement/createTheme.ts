import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const themeButton = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeightLight: 500,
  },
  palette: {
    primary: {
      main: "#F7941E",
      contrastText: "#fff",
    },
  },
});
