import { createAsyncThunk } from "@reduxjs/toolkit";

export const thunks = <T, B>(func: any, typePrefix: string) => {
  return createAsyncThunk<T, B>(typePrefix, async (value, thunkAPI) => {
    try {
      return func(value);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  });
};
