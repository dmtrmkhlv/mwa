import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../images/logo_orange_little.png";
import close from "../images/close.svg";
import burgericon from "../images/burger.svg";
import { Entry } from "../Button";

type Burger = "active" | "noactive";

export const Header = () => {
  const [burger, setBurger] = useState("active");
  const navigate = useNavigate();
  const handlerNav = () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const handlerBurg = () => {
    if (burger === "active") {
      setBurger("noactive");
    } else {
      setBurger("active");
    }
  };
  return (
    <Box sx={{ width: 1 }} className={`header_wrap ${burger}`}>
      <div className={`header_wrap__inner ${burger}`}>
        <NavLink to={"/"} title="Home" className="header_wrap__link-home">
          <img src={logo} alt="Our Wishlist Logo" />
        </NavLink>
        <Box className="mobile_nav_buttons" onClick={handlerBurg}>
          <img
            className={`nav_images ${burger}`}
            src={burgericon}
            alt="Menu"
            height="60"
          />
          <img className="nav_images" src={close} height="60" alt="Close" />
        </Box>
        <nav className={`header_wrap-nav ${burger}`}>
          <NavLink to={"/"} className="header_wrap-main-nav">
            Главная
          </NavLink>
          <NavLink to={"/aboutus"} className="header_wrap-main-nav">
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
      </div>
    </Box>
  );
};
