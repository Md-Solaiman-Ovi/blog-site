/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  // console.log("auth", auth);
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/tag/alltags",
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
    // builder.addCase(deleteTag.fulfilled, (state: any, action: any) => {
    //   state.isLoading = false;
    //   state.tags = state.tags.filter((tag: any) => tag.id !== action.payload);
    //   state.error = null;
    // });
  },
});

// export const { removeTags } = tagSlice.actions;
export default tagSlice.reducer;
