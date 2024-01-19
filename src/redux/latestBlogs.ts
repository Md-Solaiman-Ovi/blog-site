/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLatestBlogs = createAsyncThunk(
  "latestBlogs/fetchLatestBlogs",
  async () => {
    const res = await axios.get("http://localhost:3000/latestBlogs");
    console.log("json data", res);
    return res.data;
  }
);

const LatestBlogSlice = createSlice({
  name: "latestBlogs",
  initialState: {
    isLoading: false,
    latestBlogs: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchLatestBlogs.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLatestBlogs.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.latestBlogs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchLatestBlogs.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.latestBlogs = [];
      state.error = action.error.message;
    });
  },
});

export default LatestBlogSlice.reducer;
