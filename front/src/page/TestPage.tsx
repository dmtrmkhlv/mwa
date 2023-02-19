import { FC } from "react";
import { PageProps } from "../interfaces";
import { CustomImageList, routing } from "../modules";
import Layout from "../modules/layout/Layout";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Box, Container } from "@mui/material";
import { SliderElement } from "../modules/components/SliderElement";

import wish_list_pen from "../modules/components/images/wish_list_pen.jpg";
import brown_lady from "../modules/components/images/brown_lady.jpg";
import happy_brthd from "../modules/components/images/happy_brthd.jpg";
import annyversary from "../modules/components/images/annyversary.jpg";
import valentines from "../modules/components/images/valentines.jpg";
import christmas from "../modules/components/images/christmas.jpg";

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

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export const TestPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Container>
        <Slideshow />
      </Container>
    </Layout>
  );
};
