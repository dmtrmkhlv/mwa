import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseEnv = process.env;
export const baseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return "localhost:8000";
  } else {
    return baseEnv.REACT_APP_BASE_URL;
  }
};
