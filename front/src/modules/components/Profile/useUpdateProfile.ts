import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "../../store";
import { useAppDispatch } from "../../hooks";
import { updateProfile } from "../../store/ThunkCreator";

export interface IUpdateUser {
  username?: string;
  password?: string;
  profile?: {
    photo?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    phone?: string | null;
    email?: string | null;
  };
}

export const useUpdateProfile = (updateData: IUpdateUser) => {
  const { value: userProfile } = useSelector(selectProfile);

  const id = userProfile?.id;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateProfile({ id, data: updateData }));
  }, [dispatch, id, updateData]);

  const updateUserResponse: any = {
    username: userProfile?.username || "",
    password: userProfile?.password || "",
    firstname: userProfile?.profile?.firstname || "",
    lastname: userProfile?.profile?.lastname || "",
    phone: userProfile?.profile?.phone || "",
    photo: userProfile?.profile?.photo || "",
    email: userProfile?.profile?.email || "",
    emailIsActive: userProfile?.profile?.emailIsActive || false,
  };

  return [updateUserResponse];
};
