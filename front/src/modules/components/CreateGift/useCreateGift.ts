import { ChangeEvent, useEffect, useState } from "react";
import {
  IData,
  IGift,
  selectListEvent,
  useAppDispatch,
} from "../../../modules";
import { useSelector } from "react-redux";
import { createEvent, createGift } from "../../store/ThunkCreator";

interface OutLogin {
  title: string;
  description: string;
  link: string;
  error: string;
  handlerForm: (e: ChangeEvent<HTMLInputElement>) => void;
  submitButton: () => void;
}

type useCreateFunc = (eventId: string) => OutLogin;

export const useCreateGift: useCreateFunc = (eventId) => {
  const { value: listevent, error } = useSelector(selectListEvent);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    title: "",
    link: "",
    description: "",
  });
  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((formProps) => ({
      ...formProps,
      [e.target.name]: e.target.value,
    }));
  };
  const submitButton = () => {
    const value: IGift = {
      data: { ...form, id: eventId },
    };
    dispatch(createGift(value));
    console.log(error);
  };

  return {
    title: form.title,
    description: form.description,
    link: form.link,
    error: error,
    handlerForm: handleForm,
    submitButton: submitButton,
  };
};
