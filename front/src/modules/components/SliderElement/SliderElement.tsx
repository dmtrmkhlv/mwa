import { Box, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeButton } from "./createTheme";
import { SliderElementProps } from "./SliderElementProps";

export const SliderElement = (props: SliderElementProps) => {
  const { id, src, name, text, href } = props;
  const navigate = useNavigate();
  function handler() {
    setTimeout(() => {
      navigate("/" + href);
    }, 500);
  }
  return (
    <>
      <ThemeProvider theme={themeButton}>
        <Box key={id} className="occasions-cont-item" onClick={handler}>
          <img src={src} alt={name} />
          <div>
            <p>{name}</p>
            <p className="occasions-cont-more" title={name}>
              {text}
            </p>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};
