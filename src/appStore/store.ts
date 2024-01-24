import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../redux/getTopNewDataSlice";
import blogSliceReducer from "../redux/blogSlice";
import categorySliceReducer from "../redux/categorySlice";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    blogs: blogSliceReducer,
    categories: categorySliceReducer,
  },
});

export default store;
