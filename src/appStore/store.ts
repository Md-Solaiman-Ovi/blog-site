import { configureStore } from "@reduxjs/toolkit";

import postSliceReducer from "../redux/hero-section/getTopNewDataSlice";


const store = configureStore({
    reducer: {
        
        posts: postSliceReducer
        
    }
})

export default store;