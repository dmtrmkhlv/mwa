import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getProfile } from "../../store/ThunkCreator";

export const useGetProfile = () => {
  const { value: userProfile } = useSelector(selectProfile);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfile("profile"));
  }, [dispatch]);

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
  let avatarString = "Whishlist App";

  if (userProfile && userProfile?.username !== "") {
    avatarString =
      userProfile?.profile.firstname || userProfile?.profile.lastname
        ? userProfile.profile.firstname + " " + userProfile.profile.lastname
        : userProfile.username;
  }

  const avatarFromName = stringAvatar(avatarString);

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

  return [userResponse, avatarFromName];
};
