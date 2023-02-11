import { createSlice } from "@reduxjs/toolkit";
import { DataState, IListGiver } from "../../../interfaces";

const mokUser: IListGiver = {
  username: "",
  session: false,
};

export const initialState: DataState<IListGiver> = {
  value: mokUser,
  loading: false,
  error: "",
};

export const ListGiverSlice = createSlice({
  name: "list events creator",
  initialState,
  reducers: {
    //     userAuthenticatedOut(state, action) {
    //       state.value = { username: "", session: false };
    //     },
    //   },
    //   extraReducers: (builder) => {
    //     builder.addCase(loginAccount.pending, (state) => {
    //       state.loading = true;
    //       state.error = "";
    //     });
    //     builder.addCase(loginAccount.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.value = {
    //         username: action.payload.username,
    //         session: action.payload.session,
    //       };
    //     });
    //     builder.addCase(loginAccount.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message ?? "";
    //     });
  },
});

export default ListGiverSlice.reducer;
