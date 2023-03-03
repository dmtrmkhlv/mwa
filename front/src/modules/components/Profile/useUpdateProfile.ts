import { useEffect, useMemo } from "react";
import { useAppDispatch } from "../../hooks";
import { updateProfile } from "../../store/ThunkCreator";
import { IUserProfile } from "./Profile";
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

export const useUpdateProfile = (userProfileData: IUserProfile) => {
  const updateUserProfile = (userProfileData: IUserProfile): IUpdateUser => {
    return {
      username: userProfileData?.username,
      password: userProfileData?.password,
      profile: {
        photo: userProfileData?.profile?.photo,
        firstname: userProfileData?.profile?.firstname,
        lastname: userProfileData?.profile?.lastname,
        phone: userProfileData?.profile?.phone,
        email: userProfileData?.profile?.email,
      },
    };
  };

  const memoUpdateUserProfile = useMemo(
    () => updateUserProfile(userProfileData),
    [userProfileData]
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      updateProfile({ id: userProfileData?.id, data: memoUpdateUserProfile })
    );
  }, [dispatch, memoUpdateUserProfile, userProfileData?.id]);

  return [memoUpdateUserProfile];
};
