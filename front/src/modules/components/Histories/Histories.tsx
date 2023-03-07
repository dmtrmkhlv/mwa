import { Box } from "@mui/material";
import "./Histories.scss";
import read_more from "../images/read_more.jpg";
import { NavLink } from "react-router-dom";

export const Histories = () => {
  return (
    <Box className="histories">
      <Box className="histories__inner">
        <h2>Наши лучшие истории</h2>
        <p>
          «Читайте наш блог, чтобы найти лучшие советы и рекомендации, а также
          отзывы других пользователей»
        </p>
        <Box className="histories__block">
          <img src={read_more} alt="Читать далее" />
          <Box className="readmore_text">
            <p>
              Идея “wishlist” пришла к нам из США. Изначально списки желаний
              составлялись детьми для отправки Санта-Клаусу, а хитрые взрослые
              могли таким образом точно исполнить желания ребенка.
            </p>
            <NavLink to={"/blog"}>Читать далее</NavLink>
          </Box>
        </Box>

        <Box className="other__histories">
          <Box>
            <h3>Особенности создания wishlist подарков</h3>
            <p>
              Опытные составители листов желаний советуют заполнять его не
              накануне дня рождения, а в течение всего года...
            </p>
            <a href={"/other/:id"}>Узнать больше ›</a>
          </Box>
          <Box>
            <h3>К каким праздникам составляют wishlist</h3>
            <p>
              Списки желаний можно подготовить к любому мероприятию или
              праздничной дате. Можно порадовать молодоженов или сделать
              подборку для семьи на новоселье...
            </p>
            <a href={"/other/:id"}>Узнать больше ›</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
