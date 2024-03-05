/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  // console.log("auth", auth);
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/user/allusers",
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
