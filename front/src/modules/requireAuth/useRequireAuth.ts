import { selectUser } from "../../modules";
import { useSelector } from "react-redux";

export const useRequireAuth = () => {
  const { value: data } = useSelector(selectUser);
  return { session: data.session };
};
