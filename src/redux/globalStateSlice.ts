import { createSlice } from "@reduxjs/toolkit";


export const globalStateSlice = createSlice({
    name: 'globalState',
    initialState:{
        isOpen:false,
    },
    reducers:{
        isOpenTrue: (state)=>{
            state.isOpen = true
        }
    }
})

export const {isOpenTrue} = globalStateSlice.actions
export default globalStateSlice.reducer