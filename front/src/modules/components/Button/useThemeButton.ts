import { createTheme } from "@mui/material/styles";

export const useThemeButton = () => {
  return [
    {
      theme: createTheme({
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
      }),
    },
  ];
};
