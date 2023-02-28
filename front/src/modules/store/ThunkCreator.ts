import {
  IListCreator,
  IReqUser,
  IUserSession,
  ListEvent,
  ListGift,
} from "../../interfaces";
import { api, Api } from "../api";
import { thunks } from "./helper";
import { IUser } from "./slices/ProfileSlice";

const thunkapi = new Api();

export const loginAccount = thunks<IUserSession, IReqUser>(
  thunkapi.loginAccount,
  "user/setUser"
);
export const getProfile = thunks<IUser, any>(
  thunkapi.getProfile,
  "user/getProfile"
);
export const requiredAccount = thunks<IUserSession, any>(
  thunkapi.requiredAccount,
  "user/reqUser"
);

export const getAllEvents = thunks<ListEvent[], any>(
  thunkapi.getAllEvents,
  "event/getEvent"
);
export const deactivate = thunks<ListEvent[], any>(
  thunkapi.deactivate,
  "event/desactivate"
);
export const isActivate = thunks<ListEvent[], any>(
  thunkapi.isActivate,
  "event/isActivate"
);
export const getGifts = thunks<ListGift[], any>(
  thunkapi.getGifts,
  "gift/getGift"
);
export const createEvent = thunks<ListEvent, any>(
  thunkapi.createEvent,
  "gift/createEvent"
);
export const createGift = thunks<ListGift[], any>(
  thunkapi.createGift,
  "gift/createGift"
);
