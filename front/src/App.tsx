import { BrowserRouter } from "react-router-dom";
import { Route, routing } from "./modules";
import { MainMaximPage, LoginPage, SignUpPage, TestPage } from "./page";

const route = routing();
route.create(MainMaximPage, "/", "protected", "Главная");
route.create(LoginPage, "/login", "public", "Авторизация");
route.create(SignUpPage, "/signup", "public", "Регистрация");
route.create(TestPage, "/test", "protected", "Тестовая");

export const App = () => {
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};
