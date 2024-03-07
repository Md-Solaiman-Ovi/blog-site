/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk action to delete comment from the server
export const fetchComments = createAsyncThunk(
  "comments/deleteComment",
  async () => {
    // @ts-ignore
    const auth = JSON.parse(localStorage.getItem("user"));
    // console.log("auth", auth);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/comment/allcomments",
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      // If there's an error, you can handle it here
      console.log(error);
      throw error; // Rethrow the error to be caught by the rejection handler
    }
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
