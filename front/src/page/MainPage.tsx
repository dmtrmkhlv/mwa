import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Layout from "../modules/layout/Layout";
import { Header } from "./Header/Header";
import './css/MainPage.css'

export const MainPage = () => {
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
        <p className='occasions-center'>Попробуйте приложение и найдите подарки на все случаи жизни!</p>
        <Box className='occasions-cont'>
          <div className='occasions-cont-item'>
            <img src='./images/happy_brthd.jpg' alt='Ко Дню рожденья'/>
            <p>Ко Дню рожденья</p>
            <a className='occasions-cont-more' href='/brthd' title=''>Подробнее</a>
          </div>
          <div className='occasions-cont-item'>
            <img src='./images/annyversary.jpg' alt='К юбилею'/>
            <p>К юбилею</p>
            <a className='occasions-cont-more' href='/annyversary' title=''>Подробнее</a>
          </div>
          <div className='occasions-cont-item'>
            <img src='./images/valentines.jpg' alt='Ко Дню святого Валентина'/>
            <p>Ко Дню святого Валентина</p>
            <a className='occasions-cont-more' href='/valentines' title=''>Подробнее</a>
          </div>
          <div className='occasions-cont-item'>
            <img src='./images/christmas.jpg' alt='На Рождество'/>
            <p>На Рождество</p>
            <a className='occasions-cont-more' href='/christmas' title=''>Подробнее</a>
          </div>
        </Box>
      </Box>

    </Layout>
  );
};
