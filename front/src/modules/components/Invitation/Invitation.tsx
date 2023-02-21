import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Invitation.scss";

export const Invitation = () => {
  return (
    <>
      <Box className="begin">
        <Box className="begin__inner">
          <Box className="begin__reg">
            <h2>Готовы начать?</h2>
            <a href={"/signup"} title="Простая регистрация">
              Простая регистрация
            </a>
          </Box>
          <NavLink className="reg" to={"/signup"}>
            Регистрация
          </NavLink>
          <NavLink className="why" to={"/whyme"}>
            Зачем мне это?
          </NavLink>
        </Box>
      </Box>
    </>
  );
};
