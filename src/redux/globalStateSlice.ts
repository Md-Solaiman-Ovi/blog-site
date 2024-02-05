import { createSlice } from "@reduxjs/toolkit";

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState: {
    isOpen: false,
  },
  reducers: {
    isOpenTrue: (state) => {
      state.isOpen = true;
    },
    setIsOpen: (state) => {
    //   console.log("inside isopen");
      state.isOpen = !state.isOpen; // Update state with the negation of isOpen
    },
  },
});

export const { isOpenTrue, setIsOpen } = globalStateSlice.actions;
export default globalStateSlice.reducer;
