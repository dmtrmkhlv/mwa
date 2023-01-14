import { createSlice } from "@reduxjs/toolkit";
import { DataState, IUser } from "../../interfaces";

const mokUser: IUser = {
  username: "",
};

export const initialState: DataState<IUser> = {
  // value: [],
  value: mokUser,
  loading: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(loginAccount.pending, (state) => {
  //       state.loading = true;
  //       state.error = "";
  //     });
  //     builder.addCase(loginAccount.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.value = {
  //         username: action.payload.username,
  //         idUsername: action.payload.id,
  //         firstName: action.payload.first_name,
  //         company: action.payload.accounts.from_company,
  //         idCompany: action.payload.accounts.from_company_id,
  //         role: action.payload.accounts.role,
  //         idRole: action.payload.accounts.role_id,
  //       };
  //     });
  //     builder.addCase(loginAccount.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message ?? "";
  //     });
  //   },
});

export default UserSlice.reducer;
