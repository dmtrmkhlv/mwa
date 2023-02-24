import {
  AccountCircle,
  Check,
  Email,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useLogin } from "../Login/useLogin";
import "./SignUp.css";
import { IReqUser } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import { Api } from "../../api";

export const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [form, setForm] = useState<IReqUser>({
    username: "",
    password: "",
  });
  const [access, setAccess] = useState<string>("");
  let navigate = useNavigate();

  let handlerForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((formProps) => ({
      ...formProps,
      [e.target.name]: e.target.value,
    }));
  };

  let handlerSignUp = async () => {
    const resp = await Api.registerAccount(form);

    if (resp.statusCode === 200) {
      setAccess("Успешно");
    } else {
      setAccess("Произошла ошибка");
    }
  };
  useEffect(() => {
    if (access === "Успешно") {
      setTimeout(() => navigate("/login"), 500);
    }
  }, [access]);

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        className="auth-header"
        component="h1"
        sx={{
          width: "100%",
          maxWidth: 600,
          margin: "auto",
          mb: 2,
        }}
      >
        Регистрация
      </Box>

      <Box
        className="reg-wrapper"
        sx={{
          maxWidth: 600,
          width: "100%",
          mr: "auto",
          ml: "auto",
          mb: 2,
        }}
      >
        <Box
          sx={{
            "& .MuiTextField-root": { mb: 1, maxWidth: 600, width: "100%" },
          }}
          display="flex"
          flexDirection={"column"}
        >
          <FormGroup row={false}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ fill: "rgb(63 68 78)" }} />
                  </InputAdornment>
                ),
              }}
              type="text"
              name="username"
              value={form.username}
              onChange={handlerForm}
              required
            />
            {/* <TextField
              sx={{ width: 1 }}
              id="outlined-email-input"
              label="E-mail"
              type="email"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ fill: "rgb(63 68 78)" }} />
                  </InputAdornment>
                ),
              }}
              name="email"
              value={email}
              onChange={handlerForm}
            /> */}
            <OutlinedInput
              sx={{ mb: 1 }}
              id="outlined-password-input"
              label="Пароль"
              name="password"
              value={form.password}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ fill: "rgb(63 68 78)" }} />
                    ) : (
                      <Visibility sx={{ fill: "rgb(63 68 78)" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handlerForm}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                mb: 1,
                background: "#F7941E",
                border: "2px solid #F7941E",
                "&:hover": {
                  background: "#FFF",
                  color: "#F7941E",
                },
              }}
              onClick={handlerSignUp}
            >
              <Check /> Регистрироваться
            </Button>
          </FormGroup>
          <h1>{access}</h1>
        </Box>
      </Box>
    </Box>
  );
};
