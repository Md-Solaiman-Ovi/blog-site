/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    console.log("hello ", userCredentials);
    // axios
    //   .post("http://localhost:5000/api/v1/auth/signin", userCredentials)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const requset = await axios.post(
      "http://localhost:5000/api/v1/auth/signin",
      userCredentials
    );
    const response = await requset.data;
    localStorage.setItem("user", JSON.stringify(response));

    return response;
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state: any, action: any) => {
      state.loading = false;
      state.user = null;
      console.log(action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Access Denied! Invalid Credentials";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default loginSlice.reducer;
