import { AppDispatch } from "./index";
import { UserSlice } from "./slices/UserSlice";

export const userAuthenticatedOut = (value: string) => {
  return (dispatch: AppDispatch) => {
    try {
      dispatch(UserSlice.actions.userAuthenticatedOut(value));
    } catch (e) {
      console.log("Ошибка");
    }
  };
};
