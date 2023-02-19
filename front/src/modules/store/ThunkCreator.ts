import {
  IListCreator,
  IReqUser,
  IUserSession,
  ListEvent,
} from "../../interfaces";
import { api, Api } from "../api";
import { thunks } from "./helper";

export const loginAccount = thunks<IUserSession, IReqUser>(
  Api.loginAccount,
  "user/setUser"
);

export const getListEvent = thunks<IListCreator[], any>(
  Api.getListEvent,
  "event/getEvent"
);

export const getAllEvents = thunks<ListEvent[], any>(
  api.getAllEvents,
  "event/getEvent"
);
