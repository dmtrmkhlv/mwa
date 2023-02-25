import { Link, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import { Box, Container } from "@mui/system";
import { CardRound } from "../CardRound";
import "./AboutUs.scss";
import timur from "../images/timur.jpg";
import dmitri from "../images/dmitri.jpg";
import maksim from "../images/maksim.jpg";
import yuri from "../images/yuri.jpg";
import slava from "../images/slava.jpg";
import responsiveSettings from "../../responsiveSettings.json";

export const AboutUs = () => {
  return (
    <Container className="aboutusContainer">
      <Box>
        <Typography
          gutterBottom
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "59px",
          }}
        >
          О нас
        </Typography>

        <Typography component="p">
          "My Wishlist App - приложение для создания списка подарков на
          праздник.
        </Typography>
        <Typography component="p">
          Например: День рождения. Имениник составляет список, и отправляет
          ссылку на него всем потенциальным поздравителям. Поздравитель может
          выбрать один из имеющихся в списке подарков и забронировать его за
          собой, отметив его. При этом имениник не будет знать, кто именно из
          Поздравителей что выбрал."
        </Typography>
        <Typography component="p" className="author">
          Автор: Дмитрий
        </Typography>

        <Typography component="h3">Что это?</Typography>

        <Typography component="p">
          Мы – студенты курса GeekBrains "Fullstack JavaScript". Этот проект –
          результат нашей курсовой работы. Каждый из нас выполняет какую-то
          часть работы по проекты, а вместе мы создаем приложение, которое
          добавит любому участнику немного комфорта в жизни и немного радости от
          общения с друзьями и любимыми!
        </Typography>

        <div className="slide-container">
          <Slide
            slidesToShow={3}
            slidesToScroll={1}
            responsive={responsiveSettings}
          >
            <CardRound
              sx={{ margin: "0 0 1em 0" }}
              images={timur}
              name="Тимур"
              navyk="TypeScript(Nestjs, React+redux+MUI, могу на Nextjs, ReactNative), Python(Django,FastApi, Celery+Redis), Postgresql, Docker, стараюсь поддерживать принципы SOLID"
              business="back-end"
            />
            <CardRound
              sx={{ margin: "0 0 1em 0" }}
              images={dmitri}
              name="Дмитрий"
              navyk="HTML, CSS, JavaScript, TypeScript, React, Vue, Node.js, Bootstrap, PHP, MySQL, MongoDB"
              business="Github, back-end"
            />
            <CardRound
              sx={{ margin: "0 0 1em 0" }}
              images={maksim}
              name="Максим"
              navyk="HTML, CSS, JavaScript, TypeScript, React, Vue, Node.js, Bootstrap, PHP, MySQL, MongoDB"
              business="Фронтэнд mui-вёрстка"
            />
            <CardRound
              sx={{ margin: "0 0 1em 0" }}
              images={yuri}
              name="Юрий"
              navyk="HTML/CSS/JS/React/Vue/NodeJS/Postgre/MySQL"
              business="api"
            />
            <CardRound
              sx={{ margin: "0 0 1em 0" }}
              images={slava}
              name="Вячеслав"
              navyk="JS, HTML, CSS"
              business="дизайн, архитектура"
            />
          </Slide>
        </div>

        <Typography component="p">
          Здесь не указаны ещё Мария, Леонид и Павел, которые тоже принимают
          участие в проекте, но пока ещё не проявили себя
        </Typography>

        <Typography component="p">
          <Link target="_blank" href="https://github.com/dmtrmkhlv/mwa">
            Адрес проекта
          </Link>{" "}
          на Github.com{" "}
        </Typography>
        <Typography component="p">
          <Link target="_blank" href="http://хаппибиртхдаи.рф">
            Web-адрес
          </Link>{" "}
          проекта
        </Typography>
        <Typography component="p">
          <Link target="_blank" href="https://miro.com/app/board/uXjVPwbBcmQ=/">
            Пользовательские сценарии
          </Link>{" "}
          на Miro.com{" "}
        </Typography>
        <Typography component="p">
          Наш
          <Link
            target="_blank"
            href="https://trello.com/b/hQDdk9fH/my-wishlist-app"
          >
            Trello
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};
