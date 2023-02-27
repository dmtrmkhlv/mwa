import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../interfaces";
import { getProfile, loginAccount, requiredAccount } from "../ThunkCreator";

interface IProfile {
  id: string;
  photo: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  emailIsActive: boolean;
}

export interface IUserProfile {
  id: string;
  username: string;
  password: string;
  profile: IProfile;
}

export const initialState: DataState<IUserProfile | null> = {
  value: null,
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
  },
});

export const ProfileReducer = ProfileSlice.reducer;
