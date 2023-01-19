import { FormControlUnstyled, FormControlUnstyledState } from "@mui/base";
import { AccountCircle, Check } from "@mui/icons-material";
import { Input, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../modules/layout/Layout";



export const LoginPage = () => {
  return (
    <Layout>
      
      <Box className="auth-header" component="h1">Авторизация</Box>
      
      

      <Box className="auth-wrapper">

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete="off"
        >


          <TextField 
            id="outlined-basic" 
            label="Required" 
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
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Box>


        <Box>
        <FormControlUnstyled defaultValue="" required>
          {({ filled, focused }: FormControlUnstyledState) => (
            <React.Fragment>
              <Input className={filled ? 'filled' : ''} />
              {filled && !focused && <Check>✔</Check>}
            </React.Fragment>
          )}
        </FormControlUnstyled>
        </Box>
      </Box>
    </Layout>
  );
};
