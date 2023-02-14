import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box as BoxSwitcher, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../modules/components";
import "./Header.css";

export const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box sx={{ width: 1 }} className="header_wrap">
      <div className="header_wrap__inner">
        <a href="/" title="Home">
          <img
            src={"../images/logo_orange_little.png"}
            alt="Our Wishlist Logo"
          />
        </a>
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
        <Button className="signup" href={"/signup"}>
          Войти
        </Button>

        <ChakraProvider>
          <BoxSwitcher py={2} bg={colorMode === "dark" ? "gray.600" : "none"}>
            <ColorModeSwitcher bg="none" />
          </BoxSwitcher>
        </ChakraProvider>
      </div>
    </Box>
  );
};
