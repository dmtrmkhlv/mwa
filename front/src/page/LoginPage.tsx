
import { AccountCircle, Check } from "@mui/icons-material";
import { Button, Container, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../modules/layout/Layout";
import FormGroup from '@mui/material/FormGroup';



export const LoginPage = () => {
  return (
    <Layout>
      
      <Container className="auth-header" component="h1">Авторизация</Container>
      
      

      <Box className="auth-wrapper">

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete="off"
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
              type="text" required 
            />
            
            <TextField
              id="outlined-password-input"
              label="Пароль"
              type="password"
              autoComplete="current-password"
            />
          </FormGroup>
        </Box>


        <Box>
        <Button variant="contained" type="submit"><Check></Check> Войти</Button>
        </Box>
      </Box>
    </Layout>
  );
};
