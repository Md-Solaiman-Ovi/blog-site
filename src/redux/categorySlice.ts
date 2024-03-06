/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    //
    // @ts-ignore
    const auth = JSON.parse(localStorage.getItem("user"));
    // console.log("auth", auth);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allcategories",
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      // If there's an error, you can handle it here
      console.log(error);
      throw error; // Rethrow the error to be caught by the rejection handler
    }
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
