import { createAsyncThunk } from "@reduxjs/toolkit";
import { apifetch } from "../modules";

type CreateUserResponse = {
  access_token: string;
};

export const loginAccount = createAsyncThunk<any, any>(
  "user/setUser ",
  async (value, { rejectWithValue }) => {
    const user = { username: value.username, password: value.password };

    try {
      const resp = await apifetch.post<CreateUserResponse>(
        `/api/v1/auth/login`,
        {
          ...user,
        }
      );
      await localStorage.setItem("token", resp.data.access_token);
      const resptwo = await apifetch.get(`api/v1/auth/profile`);
      const data = { username: resptwo.data.username, session: true };

      return data;
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  }
);
