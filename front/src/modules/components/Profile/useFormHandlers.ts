import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { updateProfile } from "../../store/ThunkCreator";
import { IUserProfile } from "./Profile";
import { usePhoneMask } from "./usePhoneMask";

export const useFormHandlers = (
  userProfile: IUserProfile,
  setUserProfile: any
) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Изменения сохранены!");
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { phoneMask } = usePhoneMask();

  const isEqual = (object1: any, object2: any): boolean => {
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
  };
  const [userFormData, setUserFormData] = useState({
    id: userProfile.id,
    username: userProfile.username,
    password: userProfile.password,
    profile: {
      id: userProfile.profile.id,
      photo: userProfile.profile.photo,
      firstname: userProfile.profile.firstname,
      lastname: userProfile.profile.lastname,
      phone: userProfile.profile.phone,
      email: userProfile.profile.email,
      emailIsActive: userProfile.profile.emailIsActive,
    },
  });

  const handleChange = (event: any) => {
    event.persist();
    if (event.target.type === "tel") {
      if (
        event.target.value.length -
          event.target.value.replace(/\d/gm, "").length <
        11
      ) {
        phoneMask(event.target);
      } else {
        event.target.value = event.target.value.slice(0, 16);
      }
    }

    if (event.target.name === "username" || event.target.name === "password") {
      setUserFormData({
        ...userFormData,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      });
    } else {
      let newProfile = {
        ...userFormData.profile,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      };
      newProfile.phone = newProfile.phone.replace(/\D/g, "");
      setUserFormData({
        ...userFormData,
        profile: newProfile,
      });
    }
  };

  const [updateUserProfile, setUpdateUserProfile] = useState({
    username: userFormData?.username,
    password: userFormData?.password,
    profile: {
      photo: userFormData?.profile?.photo,
      firstname: userFormData?.profile?.firstname,
      lastname: userFormData?.profile?.lastname,
      phone: userFormData?.profile?.phone,
      email: userFormData?.profile?.email,
    },
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateProfile({ id: userFormData?.id, data: updateUserProfile }));
  }, [dispatch, updateUserProfile, userFormData?.id]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setUserProfile(userFormData);
    setUpdateUserProfile({
      username: userFormData?.username,
      password: userFormData?.password,
      profile: {
        photo: userFormData?.profile?.photo,
        firstname: userFormData?.profile?.firstname,
        lastname: userFormData?.profile?.lastname,
        phone: userFormData?.profile?.phone,
        email: userFormData?.profile?.email,
      },
    });
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
  return {
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
  };
};
