import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";

const rootReducer = combineReducers({
  UserReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
