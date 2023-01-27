import { Box, Button, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../images/logo_orange_little.png";
import { Entry } from "../Button";

export const Header = () => {
  const navigate = useNavigate();
  const handlerNav = () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <Box sx={{ width: 1 }} className="header_wrap ">
      <div className="header_wrap__inner ">
        <NavLink to={"/"} title="Home">
          <img src={logo} alt="Our Wishlist Logo" />
        </NavLink>

        <nav className="header_wrap-nav">
          <NavLink to={"/"} className="header_wrap-main-nav home">
            Главная
          </NavLink>
          <NavLink to={"/aboutus"} className="header_wrap-main-nav about">
            О нас
          </NavLink>
          <NavLink to={"/services"} className="header_wrap-main-nav">
            Услуги
          </NavLink>
          <NavLink to={"/gifts"} className="header_wrap-main-nav">
            Подарки
          </NavLink>
        </nav>
        <Entry />
        {/* <Button className="signup" href={"/signup"}>
          Войти
        </Button> */}
      </div>
    </Box>
  );
};
