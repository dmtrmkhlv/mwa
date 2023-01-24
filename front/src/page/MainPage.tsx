import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Layout from "../modules/layout/Layout";
import { Header } from "./Header/Header";
import './css/MainPage.css'
import { useState } from "react";







export const MainPage = () => {

  const [posLeft, setPosLeft] = useState(0);
  const moveEm = () => {
    const eltsLength = document.querySelectorAll('.occasions-cont-item').length;
    const eltWidth = document.querySelectorAll<HTMLElement>('.occasions-cont-item')[0].offsetWidth;
    const movingElt = document.querySelectorAll<HTMLElement>('.occasions-cont__inner')[0];
    const wrapWidth = movingElt.offsetWidth;
    const curLeftPosAll = movingElt.style.left;
  }

  
  return (
    <Layout>
      <Header/>

      <Box>
        <div className='main_cont-sides'>
          <div>
            <Container>
              <h1>Расскажите родным и друзьям, о чём мечтаете!</h1>
            </Container>
            <Button className='create_wish' href={'/create'}>Создать список</Button>
          </div>
          <div>
            <img src={'../images/brown_lady.jpg'} alt='Brown Lady'/>
          </div>
        </div>
        <div className='main_cont-sides'>
          <div>
            <img src={'../images/wish_list_pen.jpg'} alt='Wishlist'/>
          </div>
          <div className='main_cont-sides-pad'>
            <h2>Как это работает?</h2>
            <p>Залогиньтесь получателем и пригласите знакомых залогиниться дарителями. Они увидят список ваших желаний и смогут договориться, кто что будет дарить!</p>
            <Button className='learn_more' href={'/more'}>Подробнее</Button>
          </div>
        </div>
      </Box>


      <Box className='main_cont-occasions'>
        <h2 className='occasions-center'>Подарки на все случаи</h2>
        <p className='occasions-center'>«Попробуйте приложение и найдите подарки на все случаи жизни!»</p>
        <Box className='occasions-cont'>

          <img src={'./images/left-chev.png'} width='50' alt='Slider previous'/>
          <Box className='occasions-cont__inner'>
            <div className='occasions-cont-item'>
              <img src='./images/happy_brthd.jpg' alt='Ко Дню рожденья'/>
              <div>
              <p>Ко Дню рожденья</p>
              <a className='occasions-cont-more' href='/brthd' title=''>Узнать&nbsp;больше&nbsp;›</a>
              </div>
            </div>

            <div className='occasions-cont-item'>
              <img src='./images/annyversary.jpg' alt='К юбилею'/>
              <div>
              <p>К юбилею</p>
              <a className='occasions-cont-more' href='/annyversary' title=''>Узнать&nbsp;больше&nbsp;›</a>
              </div>
            </div>

            <div className='occasions-cont-item'>
              <img src='./images/valentines.jpg' alt='Ко Дню святого Валентина'/>
              <div>
              <p>Ко Дню святого Валентина</p>
              <a className='occasions-cont-more' href='/valentines' title=''>Узнать&nbsp;больше&nbsp;›</a>
              </div>
            </div>

            <div className='occasions-cont-item'>
              <img src='./images/christmas.jpg' alt='На Рождество'/>
              <div>
              <p>На Рождество</p>
              <a className='occasions-cont-more' href='/christmas' title=''>Узнать&nbsp;больше&nbsp;›</a>
              </div>
            </div>

            <div className='occasions-cont-item'>
              <img src='./images/valentines.jpg' alt='Ко Дню святого Валентина'/>
              <div>
              <p>Ко Дню святого Валентина</p>
              <a className='occasions-cont-more' href='/valentines' title=''>Узнать&nbsp;больше&nbsp;›</a>
              </div>
            </div>

            <div className='occasions-cont-item'>
              <img src='./images/christmas.jpg' alt='На Рождество'/>
              <div>
              <p>На Рождество</p>
              <a className='occasions-cont-more' href='/christmas' title=''>Узнать&nbsp;больше&nbsp;›</a>
              </div>
            </div>
          </Box>
          <img src={'./images/right-chev.png'} width='50' alt='Slider next'/>

        </Box>
      </Box>


      <Box className='begin'>
        <Box className='begin__inner'>
          <Box className='begin__reg'>
            <h2>Готовы начать?</h2>
            <a href={'/signup'} title='Простая регистрация'>Простая регистрация</a>
          </Box>
          <Button className='reg' href={'/signup'}>Регистрация</Button>
          <Button className='why' href={'/whyme'}>Зачем мне это?</Button>
        </Box>
      </Box>



      <Box className='histories'>
        <Box className='histories__inner'>
          <h2>Наши лучшие истории</h2>
          <p>«Читайте наш блог, чтобы найти лучшие советы и рекомендации, а также отзывы других пользователей»</p>
          <Box className='histories__block'>
            <img src={'./images/read_more.jpg'} alt='Читать далее' />
            <Box className='readmore_text'>
              <p>Идея “wishlist” пришла к нам из США. Изначально списки желаний составлялись детьми для отправки Санта-Клаусу, а хитрые взрослые могли таким образом точно исполнить желания ребенка.</p>
              <a href={'/histories/:id'} title='Читать далее'>Читать далее</a>
            </Box>
          </Box>

          <Box className='other__histories'>
            <Box>
              <h3>Особенности создания wishlist подарков</h3>
              <p>Опытные составители листов желаний советуют заполнять его не накануне дня рождения, а в течение всего года...</p>
              <a href={'/other/:id'}>Узнать&nbsp;больше&nbsp;›</a>
            </Box>
            <Box>
              <h3>К каким праздникам составляют wishlist</h3>
              <p>Списки желаний можно подготовить к любому мероприятию или праздничной дате. Можно порадовать молодоженов или сделать подборку для семьи на новоселье...</p>
              <a href={'/other/:id'}>Узнать&nbsp;больше&nbsp;›</a>
            </Box>
          </Box>
        </Box>
      </Box>

    </Layout>
  );
};
