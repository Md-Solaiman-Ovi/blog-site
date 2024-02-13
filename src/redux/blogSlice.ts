/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await axios.get("http://localhost:3000/blogs");
  // console.log("json data", res);
  return res.data;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    isLoading: false,
    blogs: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchBlogs.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.blogs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchBlogs.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.blogs = [];
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
