import { createSlice } from "@reduxjs/toolkit";
import { DataState, ListEvent } from "../../../interfaces";
import {
  createEvent,
  deactivate,
  getAllEvents,
  isActivate,
} from "../ThunkCreator";

export const initialState: DataState<ListEvent[]> = {
  value: [],
  loading: false,
  error: "",
};

export const ListEventSlice = createSlice({
  name: "list events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEvents.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getAllEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(getAllEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(createEvent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.value = [...state.value, action.payload];
    });
    builder.addCase(createEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(deactivate.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deactivate.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(deactivate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(isActivate.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(isActivate.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(isActivate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
  },
  // deactivate,
});

export const ListEventReducer = ListEventSlice.reducer;
