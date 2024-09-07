'use client'
import React from 'react'
import { Flex, Heading, Box, Show, List,ListItem,ListIcon,} from '@chakra-ui/react'
import { SlBasket } from "react-icons/sl";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiCorkedTube } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { openMenuBar,closeMenuBar } from '../redux/commerceSlice';
import { IoClose } from "react-icons/io5";
function Navbar() {
  const dispatch = useDispatch();
  const {isBottomBar} = useSelector((state) => state.commerce)
  const handleOpenMenubar = () => {
    dispatch(openMenuBar())
  }
  const handleCloseMenubar = () => {
    dispatch(closeMenuBar())
  }
  return (
    <>
      <Box width={["95%", null, "80%"]} margin="0 auto" >
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
            <Box position="absolute" top={0} right={0} width={50} height={50} bgColor='#cbb7ff' borderBottomLeftRadius='90%' cursor='pointer'>
              {isBottomBar ?(
                 <Box ml={3} mt={1} onClick={handleCloseMenubar}><IoClose size={28} color='white'  /></Box>
              ) :  <Box ml={4} mt={1} onClick={handleOpenMenubar}><IoMdMenu size={25} color='white' /></Box>}
             
              </Box>
          </Show>
          <Show below='md'>
          {
  isBottomBar && (
    <Box position="fixed" bottom={0}   left={0} width="200px" height="200px" bgColor="#AEECD1" borderTopRightRadius="90%">

<List spacing={3}  mt={7} fontSize='large' fontWeight={400}>
  <ListItem mb={4}  ml={3}  >
    <ListIcon as={FaHome}color='black' />
   Home
  </ListItem >
  <ListItem mb={4} ml={5}>
    <ListIcon as={GiCorkedTube} color='black' />
    Products
  </ListItem>
  <ListItem ml={8} mb={4}>
    <ListIcon as={FaInfoCircle} color='black' />
  About Us
  </ListItem>
  <ListItem ml={16}>
    <ListIcon as={SlBasket} color='black' />
  Card
  </ListItem>


</List>




</Box>
  )
}
          </Show>



        </Flex>
      </Box>

    </>
  )
}

export default Navbar
