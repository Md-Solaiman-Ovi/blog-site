import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../redux/getTopNewDataSlice";
import blogSliceReducer from "../redux/blogSlice";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    blogs: blogSliceReducer
  },
});

export default store;
