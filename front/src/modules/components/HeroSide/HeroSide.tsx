import { Box, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import style from "./HeroSide.module.scss";

import brown_lady from "../images/brown_lady.jpg";
import wish_list_pen from "../images/wish_list_pen.jpg";
import { useCustomeNavigate } from "../../hooks";

export const HeroSide = () => {
  const [navigateCreate] = useCustomeNavigate("/create", true);
  const [navigateHowItWorks] = useCustomeNavigate("/howitworks", true);

  return (
    <Box>
      <div className={style.sides}>
        <div className={style.sides_pad}>
          <div>
            <h1>Расскажите родным и друзьям, о чём мечтаете!</h1>
          </div>
          <button className={style.create_wish} {...navigateCreate}>
            Создать список
          </button>
        </div>
        <div>
          <img src={brown_lady} alt="Brown Lady" />
        </div>
      </div>
      <div className={style.sides}>
        <div>
          <img src={wish_list_pen} alt="Wishlist" />
        </div>
        <div className={style.sides_pad}>
          <h2>Как это работает?</h2>
          <p>
            Залогиньтесь получателем и пригласите знакомых залогиниться
            дарителями. Они увидят список ваших желаний и смогут договориться,
            кто что будет дарить!
          </p>
          <button className={style.white_bg} {...navigateHowItWorks}>
            Подробнее
          </button>
        </div>
      </div>
    </Box>
  );
};
