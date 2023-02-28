import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../interfaces";
import { getProfile, updateProfile } from "../ThunkCreator";

interface IUserProfile {
  id: string;
  photo: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  emailIsActive: boolean;
}

export interface IUser {
  id: string;
  username: string;
  password: string;
  profile: IUserProfile;
  events: any[];
}

const mokUser: IUser = {
  id: "",
  username: "",
  password: "",
  profile: {
    id: "",
    photo: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    emailIsActive: false,
  },
  events: [],
};

export const initialState: DataState<IUser | null> = {
  value: mokUser,
  loading: false,
  error: "",
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      // state.value = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
  },
});

export const ProfileReducer = ProfileSlice.reducer;
