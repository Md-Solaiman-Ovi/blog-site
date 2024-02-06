/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const res = await axios.get("http://localhost:3000/comments");

    return res.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    comments: [],
    error: null,
  },
  reducers: {
    removeComments: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.comments = state.comments.filter(
        (item: { id: number }) => item.id !== id
      );
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchComments.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.comments = action.payload;
      state.error = null;
    });
    builder.addCase(fetchComments.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.comments = [];
      state.error = action.error.message;
    });
  },
});
export const { removeComments } = commentSlice.actions;
export default commentSlice.reducer;
