import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import logo from "../images/logo_orange_little.png";
import vk from "../images/vk.png";
import pinterest from "../images/pinterest.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

export const Footer = () => {
  return (
    <Box sx={{ width: 1 }} className="footer__outer">
      <Box className="footer__top">
        <nav className="footer__nav">
          <Box>
            <NavLink to={"/"} className="header_wrap-main-nav home">
              Главная
            </NavLink>
            <NavLink to={"/aboutus"} className="header_wrap-main-nav about">
              О нас
            </NavLink>
          </Box>
          <NavLink to={"/"} title="Home">
            <img src={logo} alt="Our Wishlist Logo" />
          </NavLink>
          <Box>
            <NavLink to={"/services"} className="header_wrap-main-nav">
              Услуги
            </NavLink>
            <NavLink to={"/gifts"} className="header_wrap-main-nav">
              Подарки
            </NavLink>
          </Box>
        </nav>
      </Box>
      <Box className="footer__bottom">
        <nav className="footer_nav_soc">
          <Box>
            <a
              target="_blank"
              href={"https://vk.com"}
              className="header_wrap-main-nav home"
              rel="noreferrer"
            >
              <img src={vk} alt="Soc link" />
            </a>
            <a
              target="_blank"
              href={"https://pinterest.com"}
              className="header_wrap-main-nav about"
              rel="noreferrer"
            >
              <img src={pinterest} alt="Soc link" />
            </a>
            <a
              target="_blank"
              href={"https://twitter.com"}
              className="header_wrap-main-nav"
              rel="noreferrer"
            >
              <img src={twitter} alt="Soc link" />
            </a>
            <a
              target="_blank"
              href={"https://youtube.com"}
              className="header_wrap-main-nav"
              rel="noreferrer"
            >
              <img src={youtube} alt="Soc link" />
            </a>
          </Box>
        </nav>
      </Box>
      <Box className="footer__copy">
        <span>&copy; 2023</span>
        <NavLink className="privacy" to={"/privacy"}>
          Политики
        </NavLink>
      </Box>
    </Box>
  );
};
