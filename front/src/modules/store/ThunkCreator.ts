import { IReqUser, IUserSession } from "../../interfaces";
import { api } from "../api";
import { thunks } from "./helper";

export const loginAccount = thunks<IUserSession, IReqUser>(
  api.loginAccount,
  "user/setUser"
);
