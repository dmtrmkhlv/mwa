import { createSlice } from "@reduxjs/toolkit";
import { DataState, IListCreator } from "../../../interfaces";
import { getListEvent } from "../ThunkCreator";

export const initialState: DataState<IListCreator[]> = {
  value: [],
  loading: false,
  error: "",
};

export const ListCreatorSlice = createSlice({
  name: "list events creator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListEvent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getListEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(getListEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
  },
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
});

export default ListCreatorSlice.reducer;
