import { Button, ThemeProvider } from "@mui/material";
import { useCustomeNavigate } from "../../hooks";
import { useThemeButton } from "./useThemeButton";

export const Entry = () => {
  const [theme] = useThemeButton();
  const [navlogin] = useCustomeNavigate("/login", false);

  return (
    <ThemeProvider {...theme}>
      <Button
        {...navlogin}
        variant="outlined"
        sx={{ pl: 10, pr: 10 }}
        size="small"
      >
        Войти
      </Button>
    </ThemeProvider>
  );
};
