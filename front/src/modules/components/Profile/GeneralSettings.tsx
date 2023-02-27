import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SuccessSnackbar from "./SuccessSnackbar";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const GeneralSettings = (props: any) => {
  const { onClose, profile } = props;
  const [change, setChange] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Изменения сохранены!");
  const [values, setValues] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
    emailIsActive: profile.emailIsActive,
    photo: profile.photo,
    password: profile.password,
  });

  const handleChange = (event: any) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  useEffect(() => {
    if (JSON.stringify(profile) === JSON.stringify(values)) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [profile, values]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSnackbarText("Изменения сохранены!");
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSendConfirm = () => {
    setSnackbarText("Запрос отправлен");
    setOpenSnackbar(true);
    if (confirmButtonDisabled) {
      return;
    }
    setConfirmButtonDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Редактировать профиль" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Пароль
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  fullWidth
                  defaultValue={values.password}
                  onChange={handleChange}
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
                  label="password"
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Имя"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Фамилия"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Телефон"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Фото"
                name="photo"
                onChange={handleChange}
                // required
                value={values.photo}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                value={values.email}
                variant="outlined"
              />
            </Grid>
            {!values.emailIsActive ? (
              <Grid item md={6} xs={12}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleSendConfirm}
                  disabled={confirmButtonDisabled}
                >
                  Подтвердить Email
                </Button>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type="submit" variant="contained" disabled={change}>
            Сохранить
          </Button>
        </CardActions>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey",
          }}
        >
          <CloseIcon />
        </IconButton>
      </form>
      <SuccessSnackbar
        onClose={handleSnackbarClose}
        open={openSnackbar}
        snackbarText={snackbarText}
      />
    </Card>
  );
};

export default GeneralSettings;
