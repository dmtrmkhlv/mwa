import { AccountCircle, Check } from "@mui/icons-material";
import { Button, Container, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../modules";
import { loginAccount } from "../../../store/ThunkCreator";

export const Login = () => {
  const { value: user, error } = useAppSelector((state) => state.UserReducer);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  let from = "/";
  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((formProps) => ({
      ...formProps,
      [e.target.name]: e.target.value,
    }));
  };
  const annoyingSubmitButton = () => {
    // const user = { username: "john", password: "changeme" };
    dispatch(loginAccount(form));
    console.log(error);
  };
  useEffect(() => {
    console.log(error);
    if (user.session) {
      console.log("Здесь");
      setTimeout(() => navigate(from, { replace: true }), 500);
    }
  }, [user.session]);
  return (
    <>
      <Box className="auth-header" component="h1">
        Авторизация
      </Box>
      <Box className="auth-wrapper">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          display="flex"
          flexDirection={"column"}
        >
          <TextField
            id="outlined-basic"
            label="Обязательно"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            type="text"
            name="username"
            value={form.username}
            onChange={handleForm}
            required
          />

          <TextField
            id="outlined-password-input"
            label="Пароль"
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
          />
          <Button
            sx={{ m: 1 }}
            type="submit"
            variant="contained"
            onClick={annoyingSubmitButton}
          >
            <Check /> Войти
          </Button>
          <Box component={Link} to={"/signup"} sx={{ m: 1 }}>
            Зарегистрироваться
          </Box>
        </Box>
      </Box>
    </>
  );
};
