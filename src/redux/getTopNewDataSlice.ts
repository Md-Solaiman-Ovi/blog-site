/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { topNewsData } from "../../data/heroData";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get("http://localhost:3000/topNews");

  return res.data;
});
const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchPosts.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
