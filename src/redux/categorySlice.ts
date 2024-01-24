/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await axios.get("http://localhost:3000/categories");

    return res.data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    categories: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchCategories.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCategories.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
