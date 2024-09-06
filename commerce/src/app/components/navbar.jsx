import React from 'react'
import { Flex, Heading, Box, Show, Hide } from '@chakra-ui/react'
import { SlBasket } from "react-icons/sl";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <Box w='80%' margin="0 auto" >
        <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent="space-between">
          <Box p='2' >
            <Heading fontSize="2xl">GlowBeauty</Heading>
          </Box>

          <Show above='md'>
            <Flex gap={12} alignItems="center">
              <Box fontSize="lg" fontWeight={500} cursor="pointer">Home</Box>
              <Box fontSize="lg" fontWeight={500} cursor="pointer">Products</Box>
              <Box fontSize="lg" fontWeight={500} cursor="pointer">About Us</Box>
              <Box fontSize="lg" fontWeight={500} cursor="pointer"><SlBasket /></Box>
            </Flex>
          </Show>
          <Show below='md'>
            <Box cursor="pointer"><IoMdMenu size={25} /></Box>
          </Show>


        </Flex>
      </Box>

    </>
  )
}

export default Navbar
