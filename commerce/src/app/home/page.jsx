'use client'
import React from 'react'
import Image from 'next/image'
import { Box,Text,Button } from '@chakra-ui/react'
import img from "../../../public/home.png"
import { SlBasket } from "react-icons/sl";



function Main() {
  return (
  <>
 
  <Box width="100%" height="60vh" bgGradient='linear(to-r,#F8BBD0, #F48FB1)' >
    <Box width="80%" display="flex" mt={3} justifyContent="space-around" margin="0 auto">
    <Box width="50%">
  <Box  mt={5}
    width={400} 
    height={300} 
    borderRadius="50%" 
    bgColor="#F36394" 
    filter="blur(80px)" 
    position="absolute" 
    zIndex={0} 
  >
  </Box>
  
  <Box width="300px" height="405px" position="relative" mt={3} zIndex={1}ml={5}> 
    <Image 
      src={img}
      layout="fill"
      objectFit="cover" 
      alt="Image description"
    />
  </Box>
</Box>

{/* *******content***** */}


        <Box width="50%" mt={5} position="relative"  zIndex={100}>
      <Text textColor="white" fontSize="4xl" mt={8}>Reveal Your Radiant Skin Today </Text>
      <Text mt={8} mb={8} fontSize="20px" textColor="white">Discover the Secrets to Glowing Skin</Text>
      <Button rightIcon={<SlBasket color="white" />}  width={140} bgColor="#323233"    _hover={{bgColor: 'transparent',  border: '1px solid', borderColor: "#323233", 
  }}><Text textColor="white">Shop now</Text></Button>
           
        </Box>
    </Box>
  </Box>
 
  </>
  )
}

export default Main
