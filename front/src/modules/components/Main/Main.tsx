import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userAuthenticatedOut } from "../../store/ActionCreator";
import { useAppDispatch } from "../../hooks";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handler = () => {
    localStorage.setItem("token", "");
    dispatch(userAuthenticatedOut("Выход"));
    navigate("/login");
  };
  return (
    <>
      <h1>Главная</h1>
      <Button onClick={handler}>Выход</Button>
    </>
  );
};

//
