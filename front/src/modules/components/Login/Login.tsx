import { AccountCircle, Check } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { username, password, error, handlerForm, submitButton } = useLogin();

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
            value={username}
            onChange={handlerForm}
            required
          />

          <TextField
            id="outlined-password-input"
            label="Пароль"
            type="password"
            name="password"
            value={password}
            onChange={handlerForm}
          />
          <Button
            sx={{ m: 1 }}
            type="submit"
            variant="contained"
            onClick={submitButton}
          >
            <Check /> Войти
          </Button>
          <Box component={Link} to={"/signup"} sx={{ m: 1 }}>
            Зарегистрироваться
          </Box>
        </Box>
      </Box>
      {error !== "" ? (
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "red", m: 1, width: "23ch" }}
        >
          {error}
        </Typography>
      ) : (
        <></>
      )}
    </>
  );
};
