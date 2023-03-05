import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageProps } from "./interfaces";
import { Route, routing } from "./modules"; //useAppDispatch
import { useRequiredAccount } from "./modules/hooks/useRequiredAccount";
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
  ArchivePage,
  BookingPage,
  EventBookingPage,
  ProfilePage,
  Page404,
} from "./page";

const subroute = routing();
subroute.create(GiftPage, ":slug", "public", "подарки");
subroute.create(GiftPage, "", "public", "подарки");
const SubRouteGift: FC<PageProps> = () => {
  return <Route route={subroute.get} />;
};

const subrouteEvent = routing();
subrouteEvent.create(EventBookingPage, ":slug", "public", "подарки");
subrouteEvent.create(EventPage, "", "public", "подарки");
const SubRouteEvent: FC<PageProps> = () => {
  return <Route route={subrouteEvent.get} />;
};

const route = routing();
route.create(MainPage, "/", "public", "Главная");
route.create(LoginPage, "/login", "public", "Авторизация");
route.create(SignUpPage, "/signup", "public", "Регистрация");
route.create(AboutUsPage, "/aboutus", "public", "о нас");
route.create(HowItWorksPage, "/howitworks", "public", "Как это работает?");
route.create(ServicesPage, "/services", "public", "услуги");
route.create(SubRouteGift, "/gifts/*", "public", "подарки");
route.create(SubRouteEvent, "/event/*", "public", "мой список событий");
route.create(ArchivePage, "/archive", "public", "архив событий");
route.create(BookingPage, "/booking", "public", "я участник");
route.create(CreatePage, "/create", "public", "создание");
route.create(MorePage, "/more", "public", "подробнее");
route.create(MainPage, "/brthd", "public", "ко дню рождения");
route.create(MainPage, "/annyversary", "public", "подробнее");
route.create(MainPage, "/valentines", "public", "ко дню святого валентина");
route.create(MainPage, "/christmas", "public", "на рождество");
route.create(PrivacyPage, "/privacy", "public", "политики");
route.create(ProfilePage, "/profile", "public", "мой профиль");
route.create(Page404, "*", "public", "404");

export const App = () => {
  useRequiredAccount();
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};
