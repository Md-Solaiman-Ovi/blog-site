/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    console.log("insdie slice");
    console.log("user data", userData);
    // const obj = {
    //   name: userData?.userName,
    //   userData?email,
    //   userData?.password

    // }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        userData
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    console.log("Credentials: ", userCredentials);
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
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state: any, action: any) => {
      state.loading = false;
      state.user = null;
      console.log(action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Registration unsuccessfull !";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default loginSlice.reducer;
