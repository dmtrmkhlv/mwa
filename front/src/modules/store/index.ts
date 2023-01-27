import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
import ListCreatorReducer from "./slices/ListCreatorSlice";
import ListGiverReducer from "./slices/ListGiverSlice";
import GiftCreatorReducer from "./slices/GiftCreatorSlice";
import GiftGiverReducer from "./slices/GiftGiverSlice";
import EventLinkReducer from "./slices/EventLinkSlice";

const rootReducer = combineReducers({
  UserReducer,
  ListCreatorReducer,
  ListGiverReducer,
  GiftCreatorReducer,
  GiftGiverReducer,
  EventLinkReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const selectUser = (state: RootState) => state.UserReducer;
