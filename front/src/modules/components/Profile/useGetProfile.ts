import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfile, selectUser } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getProfile } from "../../store/ThunkCreator";

export const useGetProfile = () => {
  const { value: userProfile } = useSelector(selectProfile);
  const { value: user } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfile(user?.userId || ""));
  }, []);

  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  let avatarString = "";
  if (userProfile !== null) {
    avatarString =
      userProfile.profile.firstname || userProfile.profile.lastname
        ? userProfile.profile.firstname + " " + userProfile.profile.lastname
        : userProfile.username;
  }

  const userResponse: any = {
    userName: userProfile?.username || "",
    password: userProfile?.password || "",
    firstName: userProfile?.profile.firstname || "",
    lastName: userProfile?.profile.lastname || "",
    email: userProfile?.profile.email || "",
    phone: userProfile?.profile.phone || "",
    emailIsActive: userProfile?.profile.emailIsActive || false,
    photo: userProfile?.profile.photo || "",
  };

  return [userResponse, { stringAvatar: stringAvatar }, avatarString];
};
