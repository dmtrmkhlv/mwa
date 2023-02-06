import { Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeButton } from "./createTheme";

export const WhiteBgBtn = () => {
  const navigate = useNavigate();
  function handler() {
    setTimeout(() => {
      navigate("/more");
    }, 500);
  }
  return (
    <ThemeProvider theme={themeButton}>
      <Button
        className="learn_more"
        onClick={handler}
        variant="outlined"
        sx={{ pl: 37, pr: 37, pt: 17, pb: 17 }}
        size="small"
      >
        Подробнее
      </Button>
    </ThemeProvider>
  );
};
