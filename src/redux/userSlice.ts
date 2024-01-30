/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await axios.get("http://localhost:3000/users");

    return res.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchUsers.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
