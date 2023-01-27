import {
  // useAppDispatch,
  useAppSelector,
} from "../hooks";

export const useRequireAuth = () => {
  const { value: data } = useAppSelector((state) => state.UserReducer);
  // const dispatch = useAppDispatch();
  return { session: data.session };
};
