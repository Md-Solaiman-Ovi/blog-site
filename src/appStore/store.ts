import { configureStore } from "@reduxjs/toolkit";

// import postSliceReducer from "../redux/hero-section/getTopNewDataSlice";
import postSliceReducer from "../redux/getTopNewDataSlice";
// import sportSliceReducer from "../redux/sportsCategory";
import sportReducer from '../redux/sportsCategory';

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    sports: sportReducer,
  },
});

export default store;
