import { createSlice } from "@reduxjs/toolkit";
import { DataState, ListGift } from "../../../interfaces";
import { createGift, deleteGift, getGifts } from "../ThunkCreator";

export const initialState: DataState<ListGift[]> = {
  value: [],
  loading: false,
  error: "",
};

export const ListGiftSlice = createSlice({
  name: "list gifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGifts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getGifts.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(getGifts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(createGift.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createGift.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(createGift.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(deleteGift.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteGift.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(deleteGift.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
  },
});

export const ListGiftReducer = ListGiftSlice.reducer;
