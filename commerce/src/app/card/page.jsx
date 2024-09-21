'use client'
import React, { useEffect } from 'react';
import { Box, Text, Button, Icon } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { FaCaretLeft } from "react-icons/fa6"
import { BsHandbag } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Image from 'next/image';
import serum from "../../../public/product.jpg"
import { FaRegSmileBeam } from "react-icons/fa";
import { setCardOpenClose, setChangeAmount,setDeleteItem,setAlertMessage } from '../redux/commerceSlice';
function Card() {
  const dispatch = useDispatch();
  const { isCardOpen, cardsProducts, totalAmount,totalPrice } = useSelector((state) => state.commerce);
  useEffect(() => {
    // Sidebar açıldığında body'scrollunu gizle
    if (isCardOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Kapatıldığında geri getir
    }

    // Cleanup: Sidebar kapatıldığında tekrar scrollu geri getir
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCardOpen]);
  if (!isCardOpen) return null;
  const handleOpenCloseCard = (situation) => {
    dispatch(setCardOpenClose(situation))
  }
  const handleChangeAmount = (productId, amountChange,price) => {
    dispatch(setChangeAmount({ id: productId, change: amountChange,price:price }))
  }
  const handleDelete = (id) => {
    dispatch(setDeleteItem(id))
    dispatch(setAlertMessage({message:"Removed from your cart! We'll be here!",bg:"#A5FFB1",positive:true}))
    }
    const handleCheckOut = () => {
      if(totalAmount>0){
        dispatch(setAlertMessage({message:"Yay! Your order is in! We’re on it",bg:"#A5FFB1",positive:true}))
      }
      else{
        dispatch(setAlertMessage({message:"Your cart is empty. Time to treat yourself!",bg:"#FF7F7F",positive:false}))
      }
    }
  



  return (
    <>


      <Box width={["100%", "70%", "50%", "40%", "35%", "30%"]} zIndex={9999} height="100vh" bgColor="#FFF" position="fixed" top={0} right={0} boxShadow="-8px 4px 4px rgba(0, 0, 0, 0.25)" >
        <Box height="100vh" width="100%">
        <Box display="flex" flexDirection="column" justifyContent="space-between" width="90%" mx="auto" height={["90vh","96vh"]}>
          <Box>
          <Box cursor="pointer" onClick={() => handleOpenCloseCard(false)} display="flex" justifyContent="center" alignItems="center">
            <FaCaretLeft color="#FF8798" />
            <FaCaretLeft color="#FF8798" />
            <Text ml={2} color="#FF8798" fontWeight={400} letterSpacing="0.15rem" fontSize="1.2rem">Continue Shopping</Text>
          </Box>
          {/* Under header bag and icons */}
          <Box display="flex" mt={8} justifyContent="space-between" width="100%" mx="auto" >
            {/* left part */}
            <Box display="flex" alignItems="center">
              <Text mr={1} letterSpacing="0.08rem">Your Bag</Text>
              <BsHandbag />
            </Box>

            <Text><Box as="span" fontWeight={500} >{totalAmount}</Box> items</Text>
          </Box  >
          </Box>
          {/* header */}

         

          {/* card boxes */}
          <Box height="70%" width="100%" overflowY="auto">
            {
              cardsProducts.length < 1 && (
                <Box mt={8} fontSize="1rem"  >

                  <Text display="flex" alignItems="flex-start">
                    <Icon as={FaRegSmileBeam} color="#FF8798" boxSize={6} mr={2} />
                    <span>
                  
                      Oopps! Your cart is empty. Start shopping to fill it with your favorite products!
                    </span>
                  </Text>

                </Box>
              )
            }
            {cardsProducts.length > 0 && (
              cardsProducts.map((product) => (
                <Box width="100%" mt={8} display="flex" alignItems="center" justifyContent="space-between" height="90px" >
                  {/* icon */}
                  <Box width="10%" cursor="pointer" onClick={() => handleDelete(product.id)}><FaRegTrashCan color='#FF8798' /></Box>
                  {/* products */}
                  <Box width="65%" height="100%" display="flex" justifyContent="space-around" >
                    <Box width="30%"   >
                      <Box width="100%" height="100%" position="relative">
                        <Image
                          src={product.img}
                          alt="Serum Image"
                          fill
                          style={{ objectFit: "cover" }} />
                      </Box>

                    </Box>
                    <Box width="60%" fontSize="14px" display="flex" flexDirection="column" justifyContent="space-around">
                      <Text>{product.name}</Text>
                      <Text fontWeight={500}>${product.price}</Text>
                    </Box>
                  </Box>
                  {/* amount */}
                  <Box width="20%" display="flex" justifyContent="space-around" alignItems="center">
                    <Box onClick={() => handleChangeAmount(product.id, -1,-product.price)} cursor="pointer"><FiMinusCircle /></Box>
                    <Text>{product.amount}</Text>
                    <Box onClick={() => handleChangeAmount(product.id, 1,product.price)} cursor="pointer"><FiPlusCircle /></Box>
                  </Box>
                </Box>
              ))
            )

            }








          </Box>

          {/* button */}

<Box  zIndex={999999} onClick={()=> handleCheckOut()}  mx="auto" width="70%" mt={3} >    <Button width="100%" height="40px" bgColor="#FF8798" color="white" _hover={{ bgColor: "#FFA9B5" }}  >${totalPrice} CHECKOUT</Button>
</Box>
      
        </Box>
        </Box>
    





      </Box>




    </>
  )
}

export default Card


