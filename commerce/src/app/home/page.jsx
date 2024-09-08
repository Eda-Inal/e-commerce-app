'use client'
import React from 'react'
import Image from 'next/image'
import { Box,Text,Button } from '@chakra-ui/react'
import img from "../../../public/home.png"
import { RiDoubleQuotesL ,RiDoubleQuotesR} from "react-icons/ri";



function Main() {
  return (
  <>
 
  <Box width="100%" height="60vh" bgGradient='linear(to-r,#F8BBD0, #F48FB1)' >
    <Box width="80%" display="flex" mt={3} justifyContent="space-around" margin="0 auto">
        <Box width="50%" position="relative"  zIndex={100}>
        <Box width="300px" height="405px" position="relative" mt={3}>
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
      <Text textColor="white" fontSize="4xl" >Reveal Your Radiant Skin </Text>
      <Text fontSize="4xl" textColor="#323233">Today</Text>
      <Text mt={3} fontSize="20px" textColor="white">Discover the Secrets to Glowing Skin</Text>
      <Button mt={5} width={120} bgColor="#323233" p={2}><Text textColor="white">Shop now</Text></Button>
           
        </Box>
    </Box>
  </Box>
  <Box position="absolute" width={400} height={300} top="70px" left="100px" borderRadius="50%" bgColor="#F36394" blur="100px"   filter="blur(100px)">
  </Box>
  <Box position="absolute" width={400} height={300} top="-178px" left="747px" borderRadius="50%" bgColor="#F36394" blur="100px"   filter="blur(100px)">
  </Box>
  </>
  )
}

export default Main
