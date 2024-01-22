/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTech = createAsyncThunk(
  "tech/fetchTech",
  async () => {
    const res = await axios.get("http://localhost:3000/Tech");

    return res.data;
  }
);

const techSlice = createSlice({
  name: "tech",
  initialState: {
    isLoading: false,
    tech: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchTech.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTech.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.tech = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTech.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.tech = [];
      state.error = action.error.message;
    });
  },
});

export default techSlice.reducer;
