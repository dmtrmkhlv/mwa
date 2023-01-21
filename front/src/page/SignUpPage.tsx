import { AccountCircle, Check, Email } from "@mui/icons-material";
import { Box, Button, Container, FormGroup, InputAdornment, TextField } from "@mui/material";
import Layout from "../modules/layout/Layout";

export const SignUpPage = () => {
  return (
    <Layout>
      
      <Container className="auth-header" component="h1">Регистрация</Container>
      
      

      <Box className="reg-wrapper"> 

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          noValidate={false}
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
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
          </FormGroup>
        </Box>


        <Box>
        <Button variant="outlined" type="submit"><Check></Check> Регистрироваться</Button>
        </Box>
      </Box>
    </Layout>
  );
};
