import { configureStore } from "@reduxjs/toolkit";

// import postSliceReducer from "../redux/hero-section/getTopNewDataSlice";
import postSliceReducer from "../redux/getTopNewDataSlice";
// import sportSliceReducer from "../redux/sportsCategory";
import sportReducer from '../redux/sportsCategory';
import latestBlogsreducer from "../redux/latestBlogs";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    sports: sportReducer,
    latestBlogs: latestBlogsreducer
  },
});

export default store;
