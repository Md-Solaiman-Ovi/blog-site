import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../redux/getTopNewDataSlice";
import blogSliceReducer from "../redux/blogSlice";
import categorySliceReducer from "../redux/categorySlice";
import tagSliceReducer from "../redux/tagSlice";
import commentSliceReducer from "../redux/commentSlice";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    blogs: blogSliceReducer,
    categories: categorySliceReducer,
    tags: tagSliceReducer,
    comments: commentSliceReducer,
  },
});

export default store;
