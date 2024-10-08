'use client'
import React from 'react'
import Link from 'next/link';
import { Flex, Heading, Box, Show, List, ListItem, ListIcon, Text, useBreakpointValue } from '@chakra-ui/react'

import { IoMdMenu } from "react-icons/io";

import { useSelector, useDispatch } from 'react-redux';
import { openMenuBar, closeMenuBar,setCardOpenClose } from '../redux/commerceSlice';
import { IoClose } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
function Navbar() {
  const dispatch = useDispatch();
  const { isBottomBar,navbarItems,totalAmount } = useSelector((state) => state.commerce)
  const handleOpenMenubar = () => {
    dispatch(openMenuBar())
  }
  const handleCloseMenubar = () => {
    dispatch(closeMenuBar())
  }
  const handleOpenCloseCard= (situation) => {
    dispatch(setCardOpenClose(situation))
          }


  //küçük ekranda
  const showNavbar = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Box width="90%" height="7vh" mx="auto" >
        <Box width={["95%", null, "100%"]} margin="0 auto"  >
          <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent="space-between" textColor="gray.700" position="relative" zIndex={100}>
            <Box p='2'>
              <Text fontSize="2xl" textColor="#FF8798" fontWeight={400}>BrightAura</Text>
            </Box>

            {
              !showNavbar && (
                <Flex gap={10} alignItems="center" fontWeight={300} >
                  <Box fontSize="lg" cursor="pointer"><Link href="/">Home</Link></Box>
                  <Box fontSize="lg" cursor="pointer"><Link href="/products">Products</Link></Box>
             
                  <Box onClick={() => handleOpenCloseCard(true)} fontSize="lg" fontWeight={500} cursor="pointer" position="relative">
                    <BsHandbag color='#FF8798' />
                    <Box position="absolute" fontSize="10px" top="-2" right="-1">
                      {totalAmount}
                      </Box>
                      </Box>
                </Flex>
              )
            }




          </Flex>
        </Box>

      </Box>
{
  showNavbar && (
    
    <>
     <Box position="absolute" boxShadow=" -3px 3px 3px rgba(0, 0, 0, 0.25)" top={0} right={0} width="50px" height="50px" bgColor="#FF8798"   borderBottomLeftRadius="90%" display="flex" justifyContent="center"  >
        {
          isBottomBar ?  (
<Box mt={2} onClick={()=> handleCloseMenubar()}  >
          <IoClose style={{ cursor: 'pointer' }} size="24px" />
        </Box>
          ) : (
<Box mt={2} onClick={()=> handleOpenMenubar()}  >
          <IoMdMenu style={{ cursor: 'pointer' }} size="22px" />
        </Box>
          )
        }
        

      </Box>
    
      {isBottomBar && (
    <Box position="fixed" boxShadow="5px -3px 3px rgba(0, 0, 0, 0.25)" zIndex={999} bottom={0} left={0} width="10rem" fontWeight={500} height="10rem" bgColor="#FF8798" color="gray.700"  borderTopRightRadius="90%" display="flex" flexDirection="column" justifyContent="space-around"    >
 {navbarItems.map((item) => (
  <Box display="flex" ml={2} alignItems="center" key={item.name} onClick={()=>handleCloseMenubar()}>
    <item.icon  />
    <Box ml={1} fontSize="1.2rem">
      {/* Eğer item.name 'My card' ise onClick ekle, değilse normal Link */}
      {item.name === 'My Card' ? (
        <Box as="span" onClick={() => handleOpenCloseCard(true)} cursor="pointer">
          {item.name}
        </Box>
      ) : (
        <Link href={`/${item.link}`}>
          {item.name}
        </Link>
      )}
    </Box>
  </Box>
))}

  
   

    </Box>
      )}</>
  )
}
    
     
  
    </>
  )
}

export default Navbar
