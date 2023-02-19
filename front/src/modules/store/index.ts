import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./slices/UserSlice";
import ListCreatorReducer from "./slices/ListCreatorSlice";
import ListGiverReducer from "./slices/ListGiverSlice";
import GiftCreatorReducer from "./slices/GiftCreatorSlice";
import GiftGiverReducer from "./slices/GiftGiverSlice";
import { ListEventReducer } from "./slices/ListEventSlice";

const rootReducer = combineReducers({
  UserReducer,
  ListCreatorReducer,
  ListGiverReducer,
  GiftCreatorReducer,
  GiftGiverReducer,
  ListEventReducer,
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
export const selectListEvent = (state: RootState) => state.ListEventReducer;
