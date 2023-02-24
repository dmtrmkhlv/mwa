import { ChangeEvent, useEffect, useState } from "react";
import { IData, selectListEvent, useAppDispatch } from "../../../modules";
import { useSelector } from "react-redux";
import { createEvent } from "../../store/ThunkCreator";

interface OutLogin {
  title: string;
  description: string;
  error: string;
  handlerForm: (e: ChangeEvent<HTMLInputElement>) => void;
  submitButton: () => void;
}

type useCreateFunc = () => OutLogin;

export const useCreateEvent: useCreateFunc = () => {
  const { value: listevent, error } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(form);
    setForm((formProps) => ({
      ...formProps,
      [e.target.name]: e.target.value,
    }));
  };
  const submitButton = () => {
    // dispatch(loginAccount(form));
    const value: IData = {
      data: form,
    };
    dispatch(createEvent(value));
    console.log(error);
  };

  return {
    title: form.title,
    description: form.description,
    error: error,
    handlerForm: handleForm,
    submitButton: submitButton,
  };
};
