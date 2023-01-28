import { createSlice } from "@reduxjs/toolkit";
import { DataState, IUserSession } from "../../../interfaces";
import { loginAccount } from "../ThunkCreator";

const mokUser: IUserSession = {
  username: "",
  userId: null,
  session: false,
};

export const initialState: DataState<IUserSession> = {
  value: mokUser,
  loading: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthenticatedOut(state, action) {
      state.value = { username: "", session: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAccount.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loginAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.value = {
        username: action.payload.username,
        session: action.payload.session,
        userId: action.payload.userId,
      };
    });
    builder.addCase(loginAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
  },
});

export default UserSlice.reducer;
