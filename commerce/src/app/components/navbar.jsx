'use client'
import React from 'react'
import Link from 'next/link';
import { Flex, Heading, Box, Show, List,ListItem,ListIcon,Text} from '@chakra-ui/react'
import { BsBasket } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiCorkedTube } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { openMenuBar,closeMenuBar } from '../redux/commerceSlice';
import { IoClose } from "react-icons/io5";
import { BsBasket3Fill } from "react-icons/bs";
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
    <Box width="100%" height="7vh"  >
    <Box width={["95%", null, "80%"]} margin="0 auto"  >
        <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent="space-between" textColor="gray.700" position="relative"  zIndex={100}>
          <Box p='2'>
            <Text fontSize="2xl" textColor="#FF716A" fontWeight={400}>BrightAura</Text>
          </Box>

      
            <Flex gap={10} alignItems="center" fontWeight={300} >
              <Box fontSize="lg"  cursor="pointer"><Link href="/home">Home</Link></Box>
              <Box fontSize="lg"  cursor="pointer">Products</Box>
              <Box fontSize="lg" cursor="pointer">About Us</Box>
              <Box fontSize="lg" fontWeight={500} cursor="pointer"><BsBasket3Fill  /></Box>
            </Flex>
         
  
       



        </Flex>
      </Box>
    </Box>
  

    </>
  )
}

export default Navbar
