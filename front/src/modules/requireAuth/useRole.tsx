import { Role } from "../../interfaces";
export const useRole = (
  userId: number | null | undefined,
  creator: number | null
): Role => {
  if (userId === creator) {
    return "creator";
  } else if (userId === 2) {
    return "giver";
  } else if (userId === undefined) {
    return "norequired";
  }
  return "norequired";
};
