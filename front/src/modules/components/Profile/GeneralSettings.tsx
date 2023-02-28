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
import { useUpdateProfile } from "./useUpdateProfile";

const GeneralSettings = (props: any) => {
  const { onClose, profile } = props;
  const [change, setChange] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Изменения сохранены!");
  const [values, setValues] = useState({
    firstname: profile.firstname,
    lastname: profile.lastname,
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
    emailIsActive: profile.emailIsActive,
    photo: profile.photo,
    password: profile.password,
  });
  const [updateUserData, setUpdateUserData] = useState({
    username: values.username,
    password: values.password,
    profile: {
      photo: values.photo,
      firstname: values.firstname,
      lastname: values.lastname,
      phone: values.phone,
      email: values.email,
    },
  });

  const [updateUserResponse] = useUpdateProfile(updateUserData);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function isEqual(object1: any, object2: any) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);

    if (props1.length !== props2.length) {
      return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
      const prop = props1[i];
      const bothAreObjects =
        typeof object1[prop] === "object" && typeof object2[prop] === "object";

      if (
        (!bothAreObjects && object1[prop] !== object2[prop]) ||
        (bothAreObjects && !isEqual(object1[prop], object2[prop]))
      ) {
        return false;
      }
    }

    return true;
  }

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
    if (isEqual(profile, values)) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [isEqual, profile, values]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setUpdateUserData({
      username: values.username,
      password: values.password,
      profile: {
        photo: values.photo,
        firstname: values.firstname,
        lastname: values.lastname,
        phone: values.phone,
        email: values.email,
      },
    });

    console.log(updateUserResponse);

    if (updateUserResponse.username) {
      setSnackbarText("Изменения сохранены!");
      setOpenSnackbar(true);
    }
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
                required
                onChange={handleChange}
                value={values.username}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password">
                  Пароль
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  fullWidth
                  required
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
                value={values.firstname}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Фамилия"
                name="lastName"
                onChange={handleChange}
                value={values.lastname}
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
