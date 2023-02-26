import { useEffect } from "react";
import { requiredAccount } from "../store/ThunkCreator";
import { useAppDispatch } from "./redux";

export const useRequiredAccount = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requiredAccount("запрос"));
  }, []);
};
