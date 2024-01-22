import { configureStore } from "@reduxjs/toolkit";

// import postSliceReducer from "../redux/hero-section/getTopNewDataSlice";
import postSliceReducer from "../redux/getTopNewDataSlice";
// import sportSliceReducer from "../redux/sportsCategory";
import sportReducer from "../redux/sportsCategory";
import latestBlogsReducer from "../redux/latestBlogs";
import techSliceReducer from "../redux/techCategory";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    sports: sportReducer,
    latestBlogs: latestBlogsReducer,
    tech: techSliceReducer,
  },
});

export default store;
