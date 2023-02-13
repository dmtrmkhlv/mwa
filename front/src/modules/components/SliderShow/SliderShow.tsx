import { Slide } from "react-slideshow-image";
import { MultiActionAreaCard } from "../Card";
import "./SliderShow.scss";
import happy_brthd from "../images/happy_brthd.jpg";
import annyversary from "../images/annyversary.jpg";
import valentines from "../images/valentines.jpg";
import christmas from "../images/christmas.jpg";
import { Box, Container } from "@mui/material";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const Card = () => {
  return <></>;
};

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
            <Slide>
              <div
                key={0}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <MultiActionAreaCard images={happy_brthd} />
                <MultiActionAreaCard images={annyversary} />
                <MultiActionAreaCard images={valentines} />
                <MultiActionAreaCard images={christmas} />
              </div>
              <div
                key={1}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <MultiActionAreaCard images={happy_brthd} />
                <MultiActionAreaCard images={happy_brthd} />
              </div>
            </Slide>
          </div>
        </Container>
      </Box>
    </>
  );
};

// {
//   slideImages.map((slideImage, index) => (
//     <div key={index}>
//       <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
//         <span style={spanStyle}>{slideImage.caption}</span>
//       </div>
//     </div>
//   ));
// }
