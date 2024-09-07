'use client'
import React from 'react'
import Image from 'next/image'
import { Box,Text,Icon } from '@chakra-ui/react'
import img from "../../../public/home2.png"
import { RiDoubleQuotesL ,RiDoubleQuotesR} from "react-icons/ri";



function Main() {
  return (
  <>
  <Box width="100%" height="80vh" >
    <Box width="80%" display="flex" justifyContent="space-around" margin="0 auto">
        <Box width="50%">
<Image 
src={img}
width = {300}
height = {200}

/>
        </Box>
{/* *******content***** */}


        <Box width="50%">
            <Box mt={12} textColor="gray.700">
            <Text fontSize="3xl">Transform Your Skin </Text>
            <Text fontSize="2xl" mt={3} ml={12}>with Our Exclusive Collection</Text>
         
            <Box position="relative" display="inline-block" mt={6}>

  <Icon
    as={RiDoubleQuotesL}
    position="absolute"
    top="0"
    left="-1.5rem"
    fontSize="2xl"
  />

  <Text as="span" ml="1.5rem">
    Experience the latest in skincare innovation with our expertly formulated
    products. Unlock the secrets to glowing, healthy skin now.
  </Text>


  <Icon
    as={RiDoubleQuotesR}
    position="absolute"
    bottom="0"
    right="-1.5rem"
    fontSize="2xl"
  />
</Box>
            </Box>
           
        </Box>
    </Box>
  </Box>
  </>
  )
}

export default Main
