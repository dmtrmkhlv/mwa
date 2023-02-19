import { AccountCircle, Check, Email, Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
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

export const SignUp = () => {

  const { username, email, password, error, handlerForm, submitButton } = useLogin();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };





  return (
    <Box
      sx={{ mb: 10 }}>
      <Box className="auth-header" component="h1"
      sx={{
        width: 600,
        maxWidth: '100%',
        margin: 'auto',
        mb: 2
      }}>
        Регистрация
      </Box>

      <Box className="reg-wrapper"
      sx={{
        width: 600,
        maxWidth: '100%',
        mr: 'auto',
        ml: 'auto',
        mb: 2,
      }}>
        <Box
          sx={{
            "& .MuiTextField-root": { mb: 1, width: 600, maxWidth: '100%' },
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
              sx={{ width: 1 }}
              id="outlined-email-input"
              label="E-mail"
              type="email"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              name="email"
              value={email}
              onChange={handlerForm}
            />
            <OutlinedInput
              sx={{ mb: 1 }}
              id="outlined-password-input"
              label="Пароль"
              name="password"
              value={password}
              type={showPassword ? 'text' : 'password'}
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
            variant="contained" 
            type="submit"
            sx={{ 
              mb: 1, 
              background: '#F7941E',
              border: '2px solid #F7941E',
              "&:hover" : {
                background: '#FFF',
                color: '#F7941E'
              },
            }}
            onClick={submitButton}>
              <Check /> Регистрироваться
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};
