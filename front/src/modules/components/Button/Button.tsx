import { Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeButton } from "./createTheme";

export const Entry = () => {
  const navigate = useNavigate();
  function handler() {
    setTimeout(() => {
      navigate("/login");
    }, 500);
  }
  return (
    <ThemeProvider theme={themeButton}>
      <Button
        onClick={handler}
        variant="outlined"
        sx={{ pl: 10, pr: 10 }}
        size="small"
      >
        Войти
      </Button>
    </ThemeProvider>
  );
};
