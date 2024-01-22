/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSports = createAsyncThunk(
  "sportsNews/fetchSport",
  async () => {
    const res = await axios.get("http://localhost:3000/Sports");

    return res.data;
  }
);

const sportSlice = createSlice({
  name: "sportsNews",
  initialState: {
    isLoading: false,
    sports: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchSports.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSports.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.sports = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSports.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.sports = [];
      state.error = action.error.message;
    });
  },
});

export default sportSlice.reducer;
