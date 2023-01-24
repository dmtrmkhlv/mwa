import { BrowserRouter } from "react-router-dom";
import { Route, routing } from "./modules";
import {
  MainMaximPage,
  LoginPage,
  SignUpPage,
  TestPage,
  DevelopPage,
} from "./page";

const route = routing();
route.create(MainMaximPage, "/", "public", "Главная");
route.create(LoginPage, "/login", "public", "Авторизация");
route.create(SignUpPage, "/signup", "public", "Регистрация");
route.create(TestPage, "/test", "protected", "Тестовая");
route.create(DevelopPage, "/aboutus", "public", "о нас");
route.create(DevelopPage, "/services", "public", "услуги");
route.create(DevelopPage, "/gifts", "public", "подарки");
route.create(DevelopPage, "/create", "protected", "подарки");
route.create(DevelopPage, "/more", "public", "подробнее");
route.create(DevelopPage, "/brthd", "public", "ко дню рождения");
route.create(DevelopPage, "/annyversary", "public", "подробнее");
route.create(DevelopPage, "/valentines", "public", "ко дню святого валентина");
route.create(DevelopPage, "/christmas", "public", "на рождество");

export const App = () => {
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};
