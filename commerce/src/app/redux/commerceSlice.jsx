'use client'
import { createSlice } from "@reduxjs/toolkit"
import { BsTruck } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
import { PiRabbit } from "react-icons/pi";
import { BsRecycle } from "react-icons/bs";

export const commerceSlice = createSlice({
    name : 'commerce',
    initialState:{
   isBottomBar :false,
   filterNames : [   {
    name:"All",
    id:1
  },  {
    name:"Price",
    id:2
  },
  {
    name:"Price Descending",
    id:3
  },
  {
    name:"Popularity",
    id:4
  }],
   contents:[
    {
      name:"Fast Shipping",
      icon:BsTruck
    },
    {
      name:"100% Natural",
      icon:BiLeaf
    },
    {
      name:"Cruelty-Free",
      icon:PiRabbit
    },
    {
      name:"Eco-Friendly ",
      icon:BsRecycle
    }
  
  ]

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