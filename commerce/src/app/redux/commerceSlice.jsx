'use client'
import { createSlice } from "@reduxjs/toolkit"
import { BsTruck } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
import { PiRabbit } from "react-icons/pi";
import { BsRecycle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiCorkedTube } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { TbShoppingBagX } from "react-icons/tb";

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
  
  ],
   navbarItems : [
    {
      name: "Home",
      icon: FaHome,
      link:"home"
    }, {
      name: "Products",
      icon: GiCorkedTube,
      link:"products"
    },
    {
      name: "My Card",
      icon: BsHandbag
    }
  ],
  isCardOpen : false,
  cardsProducts:[],
  totalAmount:0,
  totalPrice : 0,
  alertMessage:{
    message : "Added to your cart! Glow on!",
    bg:"#A5FFB1",
    icon:CiCircleCheck,
    positive : true

  },
  isAlert:true
  

    },
  
    reducers:{
openMenuBar : (state) => {
    state.isBottomBar = true
},
closeMenuBar : (state) => {
    state.isBottomBar = false
},
setCardOpenClose : (state,action) => {
state.isCardOpen = action.payload
},
setAddCard :(state,action) => {
  const { id, amount,price } = action.payload;
  const existingProduct = state.cardsProducts.find(product => product.id === id);
  if (existingProduct) {
    existingProduct.amount += amount;
    state.totalAmount += amount
    state.totalPrice += existingProduct.price
    state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
  } else {
    state.cardsProducts.push(action.payload);
    state.totalAmount += amount
    state.totalPrice += price
    
  }

},
setChangeAmount : (state,action) => {
const  {id,change,price} = action.payload
state.cardsProducts.map((product) =>{
  if(product.id === id) {
    product.amount += change
    state.totalAmount += change
    state.totalPrice += price
    state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
   if(product.amount <= 0) {
    state.cardsProducts = state.cardsProducts.filter(item => item.id !== id);
   }
  }

} )

},
setDeleteItem : (state,action) => {
  const id = action.payload;
  const product = state.cardsProducts.find((item) =>  item.id === id)
  state.cardsProducts = state.cardsProducts.filter(item => item.id !== id);
  state.totalAmount -= product.amount
  state.totalPrice -=product.price * product.amount
  state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
  },
  setIsAlert:(state,action) => {
state.isAlert = action.payload
  },
  setAlertMessage:(state,action) => {
const {message,bg,positive} = action.payload
state.alertMessage.message = message
state.alertMessage.bg = bg
state.alertMessage.positive = positive
state.isAlert = true
  }
    }
})
export const {openMenuBar,closeMenuBar,setCardOpenClose,setAddCard,setChangeAmount,setDeleteItem,setIsAlert,setAlertMessage} = commerceSlice.actions
export default commerceSlice.reducer