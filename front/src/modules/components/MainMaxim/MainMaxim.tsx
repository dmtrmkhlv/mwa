import { useNavigate, Link } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import "./MainPage.scss";
import wish_list_pen from "../images/wish_list_pen.jpg";
import brown_lady from "../images/brown_lady.jpg";
import { WhiteBgBtn } from "../WhiteBgBtn";
import { SliderElement } from "../SliderElement";
// import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Slideshow } from "../SliderShow/SliderShow";

export const MainMaxim = () => {
  const navigate = useNavigate();
  const navigateCreate = () => {
    setTimeout(() => navigate("/create", { replace: true }), 500);
  };
  return (
    <Box className="mainFrame">
      <Box>
        <div className="main_cont-sides">
          <div>
            <div>
              <h1>Расскажите родным и друзьям, о чём мечтаете!</h1>
            </div>
            <Button className="create_wish" onClick={navigateCreate}>
              Создать список
            </Button>
          </div>
          <div>
            <img src={brown_lady} alt="Brown Lady" />
          </div>
        </div>
        <div className="main_cont-sides">
          <div>
            <img src={wish_list_pen} alt="Wishlist" />
          </div>
          <div className="main_cont-sides-pad">
            <h2>Как это работает?</h2>
            <p>
              Залогиньтесь получателем и пригласите знакомых залогиниться
              дарителями. Они увидят список ваших желаний и смогут договориться,
              кто что будет дарить!
            </p>
            <WhiteBgBtn />
          </div>
        </div>
      </Box>
      <Box className="main_cont-occasions">
        <h2 className="occasions-center">Подарки на все случаи</h2>
        <p className="occasions-center">
          Попробуйте приложение и найдите подарки на все случаи жизни!
        </p>
        <Container>
          <Slideshow />
        </Container>
        {/* <Box className="occasions-cont">
          <Box className="occasions-cont__inner"></Box>
        </Box> */}
      </Box>
      <Box className="begin">
        <Box className="begin__inner">
          <Box className="begin__reg">
            <h2>Готовы начать?</h2>
            <a href={"/signup"} title="Простая регистрация">
              Простая регистрация
            </a>
          </Box>
          <Button className="reg" href={"/signup"}>
            Регистрация
          </Button>
          <Button className="why" href={"/whyme"}>
            Зачем мне это?
          </Button>
        </Box>
      </Box>
      <Box className="histories">
        <Box className="histories__inner">
          <h2>Наши лучшие истории</h2>
          <p>
            «Читайте наш блог, чтобы найти лучшие советы и рекомендации, а также
            отзывы других пользователей»
          </p>
          <Box className="histories__block">
            <img src={"./images/read_more.jpg"} alt="Читать далее" />
            <Box className="readmore_text">
              <p>
                Идея “wishlist” пришла к нам из США. Изначально списки желаний
                составлялись детьми для отправки Санта-Клаусу, а хитрые взрослые
                могли таким образом точно исполнить желания ребенка.
              </p>
              <a href={"/histories/:id"} title="Читать далее">
                Читать далее
              </a>
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
    </Box>
  );
};
