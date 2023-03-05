import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { sendConfirmLink, updateProfile } from "../../store/ThunkCreator";
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
  const [updateUserProfileStatus, setUpdateUserProfileStatus] = useState(false);
  const [sendEmailStatus, setSendEmailStatus] = useState(false);

  const [inputErrors, setInputErrors]: any = useState({
    phone: {
      helperText: "",
      error: false,
    },
    username: {
      helperText: "",
      error: false,
    },
    password: {
      helperText: "",
      error: false,
    },
    email: {
      helperText: "",
      error: false,
    },
    photo: {
      helperText: "",
      error: false,
    },
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const isImgUrl = async (url: string) => {
    const img = new Image();
    img.src = url;
    let answer = new Promise((resolve) => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
    }).then((value) => {
      return value;
    });
    return await answer;
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
    setInputErrors({
      ...inputErrors,
      [event.target.name]: {
        helperText: "",
        error: false,
      },
    });

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
    if (updateUserProfileStatus) {
      dispatch(
        updateProfile({ id: userFormData?.id, data: updateUserProfile })
      );
    }
  }, [dispatch, updateUserProfile, updateUserProfileStatus, userFormData?.id]);

  useEffect(() => {
    if (sendEmailStatus) {
      dispatch(sendConfirmLink({ email: userFormData.profile.email }));
    }
  }, [dispatch, userFormData.profile.email, sendEmailStatus]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let phoneErrors = {
      helperText: "",
      error: false,
    };
    let usernameErrors = {
      helperText: "",
      error: false,
    };
    let passwordErrors = {
      helperText: "",
      error: false,
    };
    let emailErrors = {
      helperText: "",
      error: false,
    };
    let photoErrors = async () => {
      if (
        (await isImgUrl(userFormData.profile.photo)) ||
        userFormData.profile.photo === ""
      ) {
        return {
          helperText: "",
          error: false,
        };
      }
      return {
        helperText: "Вставьте ссылку на изображение",
        error: true,
      };
    };

    if (
      userFormData.profile.phone.length > 1 &&
      userFormData.profile.phone.length < 11
    ) {
      phoneErrors = {
        helperText: "Неправильный формат телефона",
        error: true,
      };
    }

    if (userFormData.username.length < 6 || userFormData.username.length > 30) {
      usernameErrors = {
        helperText: "Длина username должна быть от 6 до 30 символов",
        error: true,
      };
    }
    if (userFormData.password.length < 6 || userFormData.password.length > 30) {
      passwordErrors = {
        helperText: "Длина пароля должна быть от 6 до 30 символов",
        error: true,
      };
    }
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      userFormData.profile.email
    );
    if (emailValidate === false && userFormData.profile.email !== "") {
      emailErrors = {
        helperText: "Неправильный адрес почты",
        error: true,
      };
    }

    setInputErrors({
      phone: phoneErrors,
      username: usernameErrors,
      password: passwordErrors,
      email: emailErrors,
      photo: await photoErrors(),
    });

    if (
      !phoneErrors.error &&
      !usernameErrors.error &&
      !passwordErrors.error &&
      !emailErrors.error &&
      !(await photoErrors()).error
    ) {
      setUserProfile({
        ...userFormData,
        profile: {
          ...userFormData.profile,
          emailIsActive:
            userProfile.profile.emailIsActive &&
            userFormData?.profile?.email !== userProfile.profile.email
              ? false
              : userProfile.profile.emailIsActive,
        },
      });
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
      setUpdateUserProfileStatus(true);
      setSnackbarText("Изменения сохранены!");
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSendConfirm = () => {
    setSendEmailStatus(true);
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
    inputErrors,
  };
};
