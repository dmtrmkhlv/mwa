import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getProfile } from "../../store/ThunkCreator";

export const useUpdateProfile = () => {
  const { value: userProfile } = useSelector(selectProfile);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfile("profile"));
  }, [dispatch]);

  const userResponse: any = {
    username: userProfile?.username || "",
    password: userProfile?.password || "",
    firstname: userProfile?.profile?.firstname || "",
    lastname: userProfile?.profile?.lastname || "",
    phone: userProfile?.profile?.phone || "",
    photo: userProfile?.profile?.photo || "",
    email: userProfile?.profile?.email || "",
    emailIsActive: userProfile?.profile?.emailIsActive || false,
  };

  return [userResponse];
};
