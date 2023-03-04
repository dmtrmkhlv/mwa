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
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SuccessSnackbar from "./SuccessSnackbar";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormHandlers } from "./useFormHandlers";
import { IUserProfile } from "./Profile";
import { usePhoneMask } from "./usePhoneMask";

const GeneralSettings = (props: {
  onClose: () => void;
  userProfile: IUserProfile;
  setUserProfile: any;
}) => {
  const { onClose, userProfile, setUserProfile } = props;
  const [saveButtonStatus, setSaveButtonStatus] = useState(true);

  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    isEqual,
    handleChange,
    userFormData,
    handleSubmit,
    handleSnackbarClose,
    handleSendConfirm,
    openSnackbar,
    snackbarText,
    confirmButtonDisabled,
    inputErrors,
  } = useFormHandlers(userProfile, setUserProfile);

  const { setPhoneValue } = usePhoneMask();

  useEffect(() => {
    if (isEqual(userProfile, userFormData)) {
      setSaveButtonStatus(true);
    } else {
      setSaveButtonStatus(false);
    }
  }, [isEqual, userProfile, userFormData]);

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
                value={userFormData.username}
                variant="outlined"
                helperText={inputErrors.username.helperText}
                error={inputErrors.username.error}
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
                  defaultValue={userFormData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  error={inputErrors.password.error}
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
                <FormHelperText error>
                  {inputErrors.password.helperText}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Имя"
                name="firstname"
                onChange={handleChange}
                value={userFormData.profile.firstname}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Фамилия"
                name="lastname"
                onChange={handleChange}
                value={userFormData.profile.lastname}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Телефон"
                name="phone"
                type="tel"
                onChange={handleChange}
                value={setPhoneValue(userFormData.profile.phone)}
                variant="outlined"
                placeholder="+7(___)___-__-__"
                helperText={inputErrors.phone.helperText}
                error={inputErrors.phone.error}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Фото"
                name="photo"
                // type="url"
                onChange={handleChange}
                value={userFormData.profile.photo}
                variant="outlined"
                helperText={inputErrors.photo.helperText}
                error={inputErrors.photo.error}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                value={userFormData.profile.email}
                variant="outlined"
                helperText={inputErrors.email.helperText}
                error={inputErrors.email.error}
              />
            </Grid>
            {!userFormData.profile.emailIsActive ? (
              <Grid item md={6} xs={12}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleSendConfirm}
                  disabled={
                    !saveButtonStatus ||
                    userFormData.profile.email === "" ||
                    confirmButtonDisabled
                  }
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
          <Button type="submit" variant="contained" disabled={saveButtonStatus}>
            Сохранить
          </Button>
        </CardActions>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 2,
            top: 2,
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
