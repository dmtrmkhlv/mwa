import { AccountCircle, Check, Email } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormGroup,
  InputAdornment,
  TextField,
} from "@mui/material";
import Layout from "../modules/layout/Layout";

export const SignUpPage = () => {
  return (
    <Layout isRequire={false}>
      <Box className="auth-header" component="h1">
        Регистрация
      </Box>

      <Box className="reg-wrapper">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <FormGroup row={false}>
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
              required
            />
            {/* <TextField
              id="outlined-email-input"
              label="E-mail"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            /> */}
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button sx={{ m: 1 }} variant="outlined" type="submit">
              <Check /> Регистрироваться
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </Layout>
  );
};
