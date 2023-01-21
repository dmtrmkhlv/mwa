import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Route, routing } from "./modules";
import { MainPage, LoginPage, SignUpPage, TestPage } from "./page";

const route = routing();
route.create(MainPage, "/");
route.create(LoginPage, "/login");
route.create(SignUpPage, "/signup");
route.create(TestPage, "/test");

export const App = () => {
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};
