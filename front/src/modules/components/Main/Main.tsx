import "./Main.scss";
import { Slideshow } from "../SliderShow/SliderShow";
import { HeroSide } from "../HeroSide/HeroSide";
import { Histories } from "../Histories/Histories";
import { Invitation } from "../Invitation/Invitation";

export const Main = () => {
  return (
    <>
      <HeroSide />
      <Slideshow />
      <Invitation />
      <Histories />
    </>
  );
};
