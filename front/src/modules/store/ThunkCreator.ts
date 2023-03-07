import {
  IReqUser,
  IUserSession,
  ListEvent,
  ListGift,
} from "../../interfaces";
import { Api } from "../api";
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
export const updateProfile = thunks<IUser, any>(
  thunkapi.updateProfile,
  "user/updateProfile"
);
export const sendConfirmLink = thunks<IUser, any>(
  thunkapi.sendConfirmLink,
  "user/sendConfirmLink"
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
export const createEvent = thunks<ListEvent, any>(
  thunkapi.createEvent,
  "gift/createEvent"
);
export const getGifts = thunks<ListGift[], any>(
  thunkapi.getGifts,
  "gift/getGift"
);
export const createGift = thunks<ListGift[], any>(
  thunkapi.createGift,
  "gift/createGift"
);
export const deleteGift = thunks<ListGift[], any>(
  thunkapi.deleteGift,
  "gift/deleteGift"
);
export const reserveGift = thunks<ListGift[], any>(
  thunkapi.reserveGift,
  "gift/reserveGift"
);
export const getAllOtherEvents = thunks<ListEvent[], any>(
  thunkapi.getAllOtherEvents,
  "gift/getAllOtherEvents"
);
