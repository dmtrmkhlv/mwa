import { createSlice } from "@reduxjs/toolkit";
import { DataState, ListEvent } from "../../../interfaces";
import { getAllOtherEvents } from "../ThunkCreator";

export const initialState: DataState<ListEvent[]> = {
  value: [],
  loading: false,
  error: "",
};

export const ListOtherEventSlice = createSlice({
  name: "list other events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOtherEvents.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getAllOtherEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(getAllOtherEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    // builder.addCase(createEvent.pending, (state) => {
    //   state.loading = true;
    //   state.error = "";
    // });
    // builder.addCase(createEvent.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.value = [...state.value, action.payload];
    // });
    // builder.addCase(createEvent.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? "";
    // });
    // builder.addCase(deactivate.pending, (state) => {
    //   state.loading = true;
    //   state.error = "";
    // });
    // builder.addCase(deactivate.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.value = action.payload;
    // });
    // builder.addCase(deactivate.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? "";
    // });
    // builder.addCase(isActivate.pending, (state) => {
    //   state.loading = true;
    //   state.error = "";
    // });
    // builder.addCase(isActivate.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.value = action.payload;
    // });
    // builder.addCase(isActivate.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? "";
    // });
  },
});

export const ListOtherEventReducer = ListOtherEventSlice.reducer;
