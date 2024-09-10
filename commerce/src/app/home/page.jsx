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
 <Box width="100%" minHeight={["100%", "100%", "93vh"]}   bgGradient="linear(180.08deg, #FFF2F1 43.52%, #FFE5E4 59.37%, #FFB783 109.77%)"   >
  <Box display="flex" width="90%" flexDirection={["column","column", "row"]}  mx="auto"  >
    <Box width={["90%","80%","50%"]} mx="auto" mt={8}  display="flex" flexDirection="column" textAlign={["center","center","left"]} alignItems={["center","center","flex-start"]}>
      <Text fontSize={["2rem","2.5rem","3rem"]} textColor="#FF716A" fontWeight={500}>Reveal Your Radiant Skin </Text>
      <Text fontSize={["2rem","2.5rem","3rem"]} fontWeight={500}>Today</Text>
      <Text fontSize={["1.2rem","1.5rem","2rem"]} fontWeight={300} mt={4}>Discover the Secrets to Glowing Skin</Text>
      <Button width={["135px","150px","200px"]} borderRadius="30px" height="60px" fontSize={["1rem","1.2rem","1.3rem"]}rightIcon={<BsBasket3Fill/>} mt={8} bgColor="#FF5443" _hover={{bgColor:"#ff6f61"}} color="white" boxShadow=" 5px 10px 4px rgba(0, 0, 0, 0.25)">Shop Now</Button>

      <Box minW={300} maxHeight={600}  mt={6} mb={3} bgColor="#FFEBEA" boxShadow="10px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="20px" position="relative">
        <Box display="flex" flexDirection="column" justifyContent="center"  alignItem="center" width="90%" mx="auto">
          <Box display="flex" flexDirection={["column","row"] } alignItems="center"justifyContent="space-between" mt={3}>
          <Box fontSize={["1rem","1.2rem","1.5rem"]} mb={[2,null,null]} fontWeight={500} color="#ff6f61">NOW AVAILABLE!</Box>
          <Box width={["130px","160px","180px"]} height="40px" borderRadius={20} bgColor="white"display="flex" justifyContent="center" boxShadow="0px 8px 4px rgba(0, 0, 0, 0.25)" alignItems="center" ><Text textAlign="center" fontSize={["0.9rem","1rem","1.2rem"]} fontWeight={700}>Limited Edition</Text></Box>
          </Box>
          <Box display="flex" mt={5} flexDirection={["column","column","row"]} alignItems={["center","center","flex-start"]} >
          <Box width="150px" height="170px"  position="relative">
      <Image 
        src={le} 
        layout="fill" 
        objectFit="cover" kırpsın
        alt="Sample Image" 
      />
    </Box>
<Box ml={[0,8]} display="flex" flexDirection="column"   >

  <Text fontWeight={500} fontSize={["0.9rem","1rem","1.2rem"]} mt={[3, null, null]} >Revitalize your skin with our new Radiance Hydrating Cream.</Text>
  <Box display="flex" alignItems="center" justifyContent="space-between" fontSize={["0.9rem","1rem","1.2rem"]} mt={3}>
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
  <Box display="flex" justifyContent="flex-end" mt={4} mb={2}>
    <Button width={["110px","120px","135px"]} height="50px"  borderRadius="30px" bgColor="#6BB663" _hover={{bgColor:"#78C86F"}} color="white" fontSize={["1rem","1rem","1.2rem"]}fontWeight={500} boxShadow=" 5px 10px 4px rgba(0, 0, 0, 0.15)">Buy now</Button>
  </Box>
</Box>
          </Box>
       
        </Box>
      </Box>
    </Box>
    <Box width={["90%","80%","50%"]}></Box>
  </Box>

 </Box>
 
 
  </>
  )
}

export default Main
