import { Box, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeButton } from "./createTheme";
import { SliderElementDto } from "../../../interfaces/SliderElementDto";

export const SliderElement = (input: SliderElementDto) => {
  const navigate = useNavigate();
  function handler() {
    setTimeout(() => {
      navigate("/" + input.href);
    }, 500);
  }
  return (
    <ThemeProvider theme={themeButton}>
      <Box key={input.id} className='occasions-cont-item' onClick={handler}>
        <img src={input.src} alt={input.name}/>
        <div>
        <p>{input.name}</p>
        <p className='occasions-cont-more' title={input.name}>{input.text}</p>
        </div>
      </Box>
    </ThemeProvider>
  );
};
