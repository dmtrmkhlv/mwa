import { createSlice } from "@reduxjs/toolkit";
import { DataState, ListEvent } from "../../../interfaces";
import { createEvent, getAllEvents } from "../ThunkCreator";

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

export const ListEventReducer = ListEventSlice.reducer;
