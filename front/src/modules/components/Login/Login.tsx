import {
  AccountCircle,
  Check,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  Box,
  IconButton,
  OutlinedInput,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import "./Login.scss";

export const Login = () => {
  const { username, password, error, handlerForm, submitButton } = useLogin();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [rememberLogin, setRememberLogin] = React.useState(false);

  const handleClickRemember = () => setRememberLogin((yes) => !yes);

  return (
    <>
      <Box
        sx={{
          width: 600,
          margin: "auto",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item xs={8}>
            <Box className="auth-header" component="h1">
              Войти
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Button
              component={Link}
              to={"/signup"}
              sx={{
                m: 1,
                textTransform: "uppercase",
                fontWeight: "300",
                border: "1px solid #444",
                color: "#444",
              }}
            >
              Регистрация
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        className="auth-wrapper"
        sx={{
          width: 600,
          height: 600,
          margin: "auto",
        }}
      >
        <Box
          sx={{
            "& .MuiTextField-root": { mb: 1, width: 600 },
          }}
          display="flex"
          flexDirection={"column"}
        >
          <TextField
            sx={{ width: 1 }}
            fullWidth
            id="outlined-basic"
            label="Обязательно"
            variant="outlined"
            defaultValue="Имя"
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

          <OutlinedInput
            sx={{ mb: 1 }}
            id="outlined-password-input"
            label="Пароль"
            name="password"
            defaultValue="Пароль"
            value={password}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={handlerForm}
          />
          <Button
            sx={{
              mb: 1,
              background: "#F7941E",
              border: "2px solid #F7941E",
              "&:hover": {
                background: "#FFF",
                color: "#F7941E",
              },
            }}
            type="submit"
            variant="contained"
            onClick={submitButton}
          >
            <Check /> Войти
          </Button>
          <Grid container sx={{ mt: 2, alignItems: "center" }}>
            <Grid item xs={2}>
              <div
                className={`rememberLogin ${rememberLogin}`}
                onClick={handleClickRemember}
              >
                <span></span>
              </div>
            </Grid>
            <Grid item xs={4}>
              Запомнить меня
            </Grid>
            <Grid item sx={{ textAlign: "right" }} xs={6}>
              <Link className="decolored" to={"/forget"}>
                Забыли пароль?
              </Link>
            </Grid>
          </Grid>
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
