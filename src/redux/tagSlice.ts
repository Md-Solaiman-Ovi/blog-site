/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const res = await axios.get("http://localhost:3000/tags");

  return res.data;
});

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    isLoading: false,
    tags: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchTags.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTags.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.tags = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTags.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.tags = [];
      state.error = action.error.message;
    });
  },
});

export default tagSlice.reducer;
