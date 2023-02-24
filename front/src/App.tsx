import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageProps } from "./interfaces";
import { Route, routing } from "./modules";
import {
  MainPage,
  LoginPage,
  SignUpPage,
  CreatePage,
  GiftPage,
  EventPage,
  AboutUsPage,
  ServicesPage,
  MorePage,
  PrivacyPage,
  HowItWorksPage,
} from "./page";

const subroute = routing();
subroute.create(GiftPage, ":slug", "public", "подарки");
subroute.create(GiftPage, "", "public", "подарки");

const SubRouteGift: FC<PageProps> = () => {
  return <Route route={subroute.get} />;
};

const route = routing();
route.create(MainPage, "/", "public", "Главная");
route.create(LoginPage, "/login", "public", "Авторизация");
route.create(SignUpPage, "/signup", "public", "Регистрация");
route.create(AboutUsPage, "/aboutus", "public", "о нас");
route.create(HowItWorksPage, "/howitworks", "public", "Как это работает?");
route.create(ServicesPage, "/services", "public", "услуги");
route.create(SubRouteGift, "/gifts/*", "public", "подарки");
route.create(EventPage, "/event", "public", "события");
route.create(CreatePage, "/create", "public", "создание");
route.create(MorePage, "/more", "public", "подробнее");
route.create(MainPage, "/brthd", "public", "ко дню рождения");
route.create(MainPage, "/annyversary", "public", "подробнее");
route.create(MainPage, "/valentines", "public", "ко дню святого валентина");
route.create(MainPage, "/christmas", "public", "на рождество");
route.create(PrivacyPage, "/privacy", "public", "политики");

export const App = () => {
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};
