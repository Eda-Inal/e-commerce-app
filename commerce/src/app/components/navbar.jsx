import React from 'react'
import { Flex, Heading, Box, Show,Text, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList } from '@chakra-ui/react'
import { SlBasket } from "react-icons/sl";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiCorkedTube } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <Box w={{xs:"95%",md:"80%"}} margin="0 auto" >
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
          {/* <Show below='md'>
            <Box cursor="pointer"><IoMdMenu size={25} /></Box>
          </Show> */}

<Box position="fixed" bottom={0}   left={0} width="200px" height="200px" bgColor="#FFFA86" borderTopRightRadius="90%">

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
  {/* You can also use custom icons from react-icons */}

</List>




</Box>
        </Flex>
      </Box>

    </>
  )
}

export default Navbar
