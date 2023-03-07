import { IUserProfile } from "./Profile";
export const useGetAvatarName = (userProfile: IUserProfile) => {
  function stringToColor(string: string): string {
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

  function stringAvatar(name: string): {} {
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
      userProfile?.profile?.firstname !== "" ||
      userProfile?.profile?.lastname !== ""
        ? (userProfile?.profile?.firstname || ".") +
          " " +
          (userProfile?.profile?.lastname || ".")
        : userProfile?.username.slice(0, 1) +
          " " +
          userProfile?.username.slice(1, 2);
  }

  const avatarname: {} = stringAvatar(avatarString);

  return [avatarname];
};
