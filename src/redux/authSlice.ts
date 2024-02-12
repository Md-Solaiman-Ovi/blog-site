/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/register", { email, password });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/login", { email, password });
      return res.data.token;
    } catch (err: any) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state: any, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state: any, action) => {
        state.error = action.payload;
      });
  },
});

export const { logoutUser, setError } = authSlice.actions;

export default authSlice.reducer;
