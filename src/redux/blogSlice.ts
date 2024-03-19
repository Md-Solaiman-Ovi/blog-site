/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  // console.log("auth", auth);
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/blog/allposts",
      {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      }
    );
    return response.data;
  } catch (error) {
    // If there's an error, you can handle it here
    console.log(error);
    throw error; // Rethrow the error to be caught by the rejection handler
  }
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
