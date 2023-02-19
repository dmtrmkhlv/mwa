const baseEnv = process.env;
export const baseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return baseEnv.REACT_APP_BASE_URL;
  } else {
    return baseEnv.REACT_APP_BASE_URL;
  }
};
