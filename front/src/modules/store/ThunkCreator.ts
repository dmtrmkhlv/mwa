import {
  IListCreator,
  IReqUser,
  IUserSession,
  ListEvent,
  ListGift,
} from "../../interfaces";
import { api, Api } from "../api";
import { thunks } from "./helper";

const thunkapi = new Api();

export const loginAccount = thunks<IUserSession, IReqUser>(
  thunkapi.loginAccount,
  "user/setUser"
);

export const getAllEvents = thunks<ListEvent[], any>(
  thunkapi.getAllEvents,
  "event/getEvent"
);
export const getGifts = thunks<ListGift[], any>(
  thunkapi.getGifts,
  "gift/getGift"
);
export const createEvent = thunks<ListEvent, any>(
  thunkapi.createEvent,
  "gift/getGift"
);
