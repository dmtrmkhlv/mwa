import { Button } from "@mui/material";
import { Container } from "@mui/system";
import Layout from "../modules/layout/Layout";
import { Header } from "./Header/Header";

export const MainPage = () => {
  return (
    <Layout>
      <Header/>

      <Container>
        <div className='main_cont-sides'>
          <div>
            <Container>
              <h1>Расскажите родным и друзьям, о чём мечтаете!</h1>
            </Container>
            <Button href={'/create'}>Создать список</Button>
          </div>
          <div>
            <img src={'../images/brown_lady.jpg'} alt='Brown Lady'/>
          </div>
        </div>
        
      </Container>

    </Layout>
  );
};
