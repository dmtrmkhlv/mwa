import { BrowserRouter } from "react-router-dom";
import { Route, routing } from "./modules";
import { MainPage, LoginPage, SignUpPage, TestPage } from "./page";

const route = routing();
route.create(MainPage, "/", "protected");
route.create(LoginPage, "/login", "public");
route.create(SignUpPage, "/signup", "public");
route.create(TestPage, "/test", "protected");

export const App = () => {
  return (
    <BrowserRouter>
      <Route route={route.get} />
    </BrowserRouter>
  );
};
