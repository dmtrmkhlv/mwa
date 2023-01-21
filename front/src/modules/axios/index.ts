import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseEnv = process.env;
export const baseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return baseEnv.REACT_APP_BASE_URL_TEST;
  } else {
    return baseEnv.REACT_APP_BASE_URL;
  }
};

export const accessToken = localStorage.getItem("token");

export const apifetch: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseURL(),
  timeout: 5000,
  headers: {
    Authorization: accessToken ? "Bearer " + accessToken : false,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

apifetch.interceptors.request.use((config: any) => {
  config.headers.Authorization =
    `Bearer ${localStorage.getItem("token")}` ?? "";
  return config;
});

// apifetch.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         // const response = await apifetch.post(`api/auth/jwt/refresh`, {
//         //   accessToken: accessToken,
//         // });
//         // localStorage.setItem("token", response.data.access);
//         localStorage.setItem("token", "");
//         return apifetch.request(originalRequest);
//       } catch (e) {
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );
