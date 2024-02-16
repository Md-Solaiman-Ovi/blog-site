/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState: {
    isOpen: false,
    toggleMenu: true,
  },
  reducers: {
    isOpenTrue: (state: any) => {
      state.isOpen = true;
    },
    setIsOpen: (state: any) => {
      //   console.log("inside isopen");
      state.isOpen = !state.isOpen; // Update state with the negation of isOpen
    },
    handleToggle: (state: any) => {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export const { isOpenTrue, setIsOpen, handleToggle } = globalStateSlice.actions;
export default globalStateSlice.reducer;
