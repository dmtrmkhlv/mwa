import { useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { selectUser, useAppDispatch } from "../../../modules";
import { useSelector } from "react-redux";
import { loginAccount } from "../../store/ThunkCreator";

interface OutLogin {
  username: string;
  email?: string;
  password: string;
  error: string;
  handlerForm: (e: ChangeEvent<HTMLInputElement>) => void;
  submitButton: () => void;
}

type useLoginFunc = () => OutLogin;

export const useLogin: useLoginFunc = () => {
  const { value: user, error } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  let from = location.state?.from?.pathname || "/event";
  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((formProps) => ({
      ...formProps,
      [e.target.name]: e.target.value,
    }));
  };
  const submitButton = () => {
    dispatch(loginAccount(form));
    console.log(error);
    console.log(from);
  };
  useEffect(() => {
    console.log(error);

    if (user.session) {
      setTimeout(() => navigate(from, { replace: true }), 500);
    }
  }, [user.session]);
  return {
    username: form.username,
    password: form.password,
    error: error,
    handlerForm: handleForm,
    submitButton: submitButton,
  };
};
