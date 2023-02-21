import { Slide } from "react-slideshow-image";
import { MultiActionAreaCard } from "../Card";
import "./SliderShow.scss";
import happy_brthd from "../images/happy_brthd.jpg";
import annyversary from "../images/annyversary.jpg";
import valentines from "../images/valentines.jpg";
import christmas from "../images/christmas.jpg";
import wedding from "../images/wedding.jpg";
import graduate from "../images/graduate.jpg";
import { Box, Container } from "@mui/material";





export const Slideshow = () => {


  const responsiveSettings = [
    {
      breakpoint: 1220,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      }
    },
    {
      breakpoint: 1020,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1
      }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 280,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];


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
              
                <MultiActionAreaCard images={happy_brthd} name="С Днем рожденья!" />
                <MultiActionAreaCard images={annyversary} name="С юбилеем!" />
                <MultiActionAreaCard images={valentines} name="С днем Валентина!" />
                <MultiActionAreaCard images={christmas} name="С Рождеством!" />
                <MultiActionAreaCard images={wedding} name="На свадьбу" />
                <MultiActionAreaCard images={graduate} name="На окончание" />
              
            </Slide>
          </div>
        </Container>
      </Box>
    </>
  );
};

