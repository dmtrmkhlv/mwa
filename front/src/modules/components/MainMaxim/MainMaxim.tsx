import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Header } from "../Header/Header";
import "./MainPage.scss";
import wish_list_pen from "../images/wish_list_pen.jpg";
import brown_lady from "../images/brown_lady.jpg";
import happy_brthd from "../images/happy_brthd.jpg";
import annyversary from "../images/annyversary.jpg";
import valentines from "../images/valentines.jpg";
import christmas from "../images/christmas.jpg";

export const MainMaxim = () => {
  return (
    <>
      <Header />
      <Box>
        <div className="main_cont-sides">
          <div>
            <Container>
              <h1>Расскажите родным и друзьям, о чём мечтаете!</h1>
            </Container>
            <Button className="create_wish" href={"/create"}>
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
            <Button className="learn_more" href={"/more"}>
              Подробнее
            </Button>
          </div>
        </div>
      </Box>
      <Box className="main_cont-occasions">
        <h2 className="occasions-center">Подарки на все случаи</h2>
        <p className="occasions-center">
          Попробуйте приложение и найдите подарки на все случаи жизни!
        </p>
        <Box className="occasions-cont">
          <div className="occasions-cont-item">
            <img src={happy_brthd} alt="Ко Дню рожденья" />
            <p>Ко Дню рожденья</p>
            <a className="occasions-cont-more" href="/brthd" title="">
              Подробнее
            </a>
          </div>
          <div className="occasions-cont-item">
            <img src={annyversary} alt="К юбилею" />
            <p>К юбилею</p>
            <a className="occasions-cont-more" href="/annyversary" title="">
              Подробнее
            </a>
          </div>
          <div className="occasions-cont-item">
            <img src={valentines} alt="Ко Дню святого Валентина" />
            <p>Ко Дню святого Валентина</p>
            <a className="occasions-cont-more" href="/valentines" title="">
              Подробнее
            </a>
          </div>
          <div className="occasions-cont-item">
            <img src={christmas} alt="На Рождество" />
            <p>На Рождество</p>
            <a className="occasions-cont-more" href="/christmas" title="">
              Подробнее
            </a>
          </div>
        </Box>
      </Box>
    </>
  );
};
