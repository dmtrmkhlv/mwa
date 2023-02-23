import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, routing } from "./modules";
import {
  MainPage,
  LoginPage,
  SignUpPage,
  TestPage,
  DevelopPage,
  CreatePage,
  GiftPage,
  EventPage,
  AboutUsPage,
} from "./page";

const route = routing();
route.create(MainPage, "/", "public", "Главная");
route.create(LoginPage, "/login", "public", "Авторизация");
route.create(SignUpPage, "/signup", "public", "Регистрация");
route.create(TestPage, "/test", "public", "Тестовая");
route.create(AboutUsPage, "/aboutus", "public", "о нас");
route.create(DevelopPage, "/services", "public", "услуги");
route.create(GiftPage, "/gifts", "protected", "подарки");
route.create(EventPage, "/event", "protected", "события");
route.create(CreatePage, "/create", "protected", "создание");
route.create(DevelopPage, "/more", "public", "подробнее");
route.create(DevelopPage, "/brthd", "public", "ко дню рождения");
route.create(DevelopPage, "/annyversary", "public", "подробнее");
route.create(DevelopPage, "/valentines", "public", "ко дню святого валентина");
route.create(DevelopPage, "/christmas", "public", "на рождество");
route.create(DevelopPage, "/privacy", "public", "политики");

export const App = () => {
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};

