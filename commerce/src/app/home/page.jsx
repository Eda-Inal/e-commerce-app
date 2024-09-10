'use client'
import React from 'react'
import Image from 'next/image'
import { Box,Text,Button } from '@chakra-ui/react'
import img from "../../../public/home.png"
import { BsBasket3Fill } from "react-icons/bs";
import serum from  "../../../public/serum.jpg"
import mask from  "../../../public/mask.jpeg"
import cream from  "../../../public/cream.jpg"
import le from "../../../public/le.jpg"
import five from "../../../public/five.png"


function Main() {
  return (
  <>
 <Box width="100%" height="93vh"  bgGradient="linear(180.08deg, #FFF2F1 43.52%, #FFE5E4 59.37%, #FFB783 109.77%)"  >
  <Box display="flex" width="90%" mx="auto">
    <Box width="50%" mt={8}>
      <Text fontSize="50px" textColor="#FF716A" fontWeight={500}>Reveal Your Radiant Skin </Text>
      <Text fontSize="50px" fontWeight={500}>Today</Text>
      <Text fontSize="28px" fontWeight={300} mt={4}>Discover the Secrets to Glowing Skin</Text>
      <Button width="200px" borderRadius="30px" height="60px" fontSize="20px" rightIcon={<BsBasket3Fill/>} mt={8} bgColor="#FF5443" _hover={{bgColor:"#ff6f61"}} color="white" boxShadow=" 5px 10px 4px rgba(0, 0, 0, 0.25)">Shop Now</Button>

      <Box width="80%" height="260px" mt={8} bgColor="#FFEBEA" boxShadow="10px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="20px" position="relative">
        <Box display="flex" flexDirection="column" justifyContent="center"  alignItem="center" width="90%" mx="auto">
          <Box display="flex" justifyContent="space-between" mt={3}>
          <Box fontSize="24px" fontWeight={500} color="#ff6f61">NOW AVAILABLE!</Box>
          <Box width="180px" height="40px" borderRadius={20} bgColor="white"display="flex" justifyContent="center" boxShadow="0px 8px 4px rgba(0, 0, 0, 0.25)" alignItems="center" ><Text textAlign="center" fontSize="18px" fontWeight={700}>Limited Edition</Text></Box>
          </Box>
          <Box display="flex" mt={5}  >
          <Box width="150px" height="170px"  position="relative">
      <Image 
        src={le} 
        layout="fill" 
        objectFit="cover" kırpsın
        alt="Sample Image" 
      />
    </Box>
<Box ml={8} display="flex" flexDirection="column"  >

  <Text fontWeight={500} fontSize="18px">Revitalize your skin with our new Radiance Hydrating Cream.</Text>
  <Box display="flex" alignItems="center" justifyContent="space-between" fontSize="18px" mt={3}>
  <Box display="flex">
  <Text fontWeight={500}>It's only</Text>
  <Text ml={1}  fontWeight={600} color= "#ff6f61">$18</Text>
    </Box>
   
    <Box width="100px" height="40px" position="relative">
    <Image 
        src={five} 
        layout="fill" 
        objectFit="cover" kırpsın
        alt="Sample Image" 
      />
    </Box>
  </Box>
  <Box display="flex" justifyContent="flex-end" mt={4}>
    <Button width="135px" height="50px"  borderRadius="30px" bgColor="#6BB663" color="white" fontSize="20px" fontWeight={500} boxShadow=" 5px 10px 4px rgba(0, 0, 0, 0.15)">Buy now</Button>
  </Box>
</Box>
          </Box>
       
        </Box>
      </Box>
    </Box>
    <Box width="50%"></Box>
  </Box>

 </Box>
 
 
  </>
  )
}

export default Main
