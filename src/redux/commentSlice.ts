/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk action to delete comment from the server
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId: number) => {
    await axios.delete(`http://localhost:3000/comments/${commentId}`);
    return commentId;
  }
);

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
    builder.addCase(deleteComment.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      // Remove the deleted comment from the state
      state.comments = state.comments.filter(
        (comment: any) => comment.id !== action.payload
      );
      state.error = null;
    });
  },
});
export const { removeComments } = commentSlice.actions;
export default commentSlice.reducer;
