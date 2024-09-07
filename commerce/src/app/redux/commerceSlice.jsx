'use client'
import { createSlice } from "@reduxjs/toolkit"

export const commerceSlice = createSlice({
    name : 'commerce',
    initialState:{
   isBottomBar :false
    },
    reducers:{
openMenuBar : (state) => {
    state.isBottomBar = true
},
closeMenuBar : (state) => {
    state.isBottomBar = false
}
    }
})
export const {openMenuBar,closeMenuBar} = commerceSlice.actions
export default commerceSlice.reducer