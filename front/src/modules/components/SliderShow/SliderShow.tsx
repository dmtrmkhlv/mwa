import { Slide } from "react-slideshow-image";
import { AreaCard } from "./AreaCard";
import "./SliderShow.scss";
import { Box, Container } from "@mui/material";
import responsiveSettings from "../../responsiveSettings.json";
import { rows } from "./sliderData";

export const Slideshow = () => {
  return (
    <>
      <Box className="main_cont-occasions">
        <h2 className="occasions-center">Подарки на все случаи</h2>
        <p className="occasions-center">
          Попробуйте приложение и найдите подарки на все случаи жизни!
        </p>

        <Container>
          <div className="slide-container">
            <Slide responsive={responsiveSettings}>
              {rows.map((row) => (
                <AreaCard {...row} />
              ))}
            </Slide>
          </div>
        </Container>
      </Box>
    </>
  );
};
