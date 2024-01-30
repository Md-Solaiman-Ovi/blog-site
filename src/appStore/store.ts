import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../redux/getTopNewDataSlice";
import blogSliceReducer from "../redux/blogSlice";
import categorySliceReducer from "../redux/categorySlice";
import tagSliceReducer from "../redux/tagSlice";
import commentSliceReducer from "../redux/commentSlice";
import userSliceReducer from "../redux/userSlice";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    blogs: blogSliceReducer,
    categories: categorySliceReducer,
    tags: tagSliceReducer,
    comments: commentSliceReducer,
    users: userSliceReducer,
  },
});

export default store;
