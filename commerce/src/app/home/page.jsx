'use client'
import React from 'react'
import Image from 'next/image'
import { Box,Text,Button,useBreakpointValue } from '@chakra-ui/react'
import img from "../../../public/home.png"
import { BsBasket3Fill } from "react-icons/bs";
import serum from  "../../../public/serum.jpg"
import mask from  "../../../public/mask.jpeg"
import cream from  "../../../public/cream.jpg"
import creamsecond from  "../../../public/creamsecond.jpg"
import le from "../../../public/le.jpg"
import five from "../../../public/five.png"
import Link from 'next/link'
import { useDispatch,useSelector } from 'react-redux'
import { setAddCard,setCardOpenClose } from '../redux/commerceSlice'

function Main() {
  const dispatch=useDispatch();
  const lastProduct = {
    "id": 12,
    "name": "Ultra Cream",
    "description": "Intensely hydrates and strengthens skin barrier.",
    "type": "Cream",
    "price": 23.50,
    "popularity": 4.6,
   "img": "/assets/cream4.jpg"
  }

    // Ekran genişliğine göre fotoğraf yerleşimini belirlemek için
    const imagePosition = useBreakpointValue({ base: "column", md: "row" });
  
    // Sadece küçük ekranlarda görülecek sarı fotoğraf için
    const showYellowImage = useBreakpointValue({ base: true, md: false });
    const handleBannerAdd = () => {
      dispatch(setAddCard({...lastProduct,amount:1}))
      dispatch(setCardOpenClose(true))
      }
  
  return (
  <>
 <Box width="100%" minHeight={["100%", "100%", "93vh"]}     >
  <Box display="flex" width="90%" flexDirection={["column","column", "row"]}  mx="auto"  >
    <Box width={["90%","80%","50%"]} mx="auto" mt={8}  display="flex" flexDirection="column" textAlign={["center","center","left"]} alignItems={["center","center","flex-start"]}>
      <Text fontSize="3rem" fontWeight={500}>Reveal Your Radiant Skin <Box as="span" color="#FF8798" >Today</Box></Text>
      {
  showYellowImage && (
    <Box width="300px" height="300px" position="relative" mx="auto" mt={8} >
    <Box position="absolute" zIndex={999} width={["120px","150px"]} height="50px" bgColor="white" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.25)" borderRadius="15px" top={4} left={3} display="flex" justifyContent="center" alignItems="center" >
      <Text  fontSize="1.3rem" fontWeight={500}>Glow up!</Text>
    </Box>
    <Box position="absolute" zIndex={999} width={["120px","150px"]} height="50px" bgColor="white" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.25)" borderRadius="15px" bottom={12} right={0} display="flex" justifyContent="center" alignItems="center" >
      <Text  fontSize="1.3rem" fontWeight={500}>Flawless Skin!</Text>
    </Box>

    <Box
    
    mx="auto"
    width="250px" 
      height="250px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="50%" 
    overflow="hidden" 
    zIndex={1}
   position="relative">
     <Image
      src={mask} 
      alt="Circular Image"
      fill 
    style={{ objectFit: "cover" }}
      
    />

    </Box>
    
    </Box>
  )
}
      <Text fontSize="1.7rem" fontWeight={300} mt={[0,2,4]}>Discover the Secrets to Glowing Skin</Text>


      <Button width="12rem" borderRadius="30px" height="4rem" fontSize="1.3rem" rightIcon={<BsBasket3Fill/>} mt={8} bgColor="#FF8798" _hover={{bgColor:"#FFA9B5"}} color="white" boxShadow=" 5px 10px 4px rgba(0, 0, 0, 0.35)"><Link href="/products">Shop Now</Link></Button>

      <Box minW={300} maxHeight={600}  mt={6} mb={3} bgColor="white" boxShadow="10px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="20px" position="relative">
        <Box display="flex" flexDirection="column" justifyContent="center"  alignItem="center" width="90%" mx="auto">
          <Box display="flex" flexDirection={["column","row"] } alignItems="center"justifyContent="space-between" mt={3}>
          <Box fontSize="1.2rem" mb={[2,null,null]} fontWeight={500} >NOW AVAILABLE!</Box>
          <Box width="11rem" height="40px" borderRadius={20} bgColor="#FFE3E8"display="flex" justifyContent="center" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)" alignItems="center" ><Text textAlign="center" fontSize="1rem" fontWeight={500}>Limited Edition</Text></Box>
          </Box>
          <Box display="flex" mt={5} flexDirection={["column","column","row"]} alignItems={["center","center","flex-start"]} >
          <Box width="150px" height="170px"  position="relative" borderRadius="15px">
      <Image 
        src={le} 
        fill 
        style={{ objectFit: "cover" }}
        alt="Sample Image" 
      />
    </Box>
<Box ml={[0,8]} display="flex" flexDirection="column"   >

  <Text fontWeight={500} fontSize="1.2rem" mt={[3, null, null]} >Revitalize your skin with our new Radiance Hydrating Cream.</Text>
  <Box display="flex" alignItems="center" justifyContent="space-between" fontSize="1.2rem" mt={3}>
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
  <Box display="flex" justifyContent="flex-end"  mb={3}>
    <Button onClick = {() => handleBannerAdd()} width="10rem" height="3rem"  borderRadius="30px" bgColor="#FF8798" _hover={{bgColor:"#FFA9B5"}} color="white" fontSize="1.2rem" fontWeight={500} boxShadow=" 5px 10px 4px rgba(0, 0, 0, 0.15)">Buy now</Button>
  </Box>
</Box>
          </Box>
       
        </Box>
      </Box>
    </Box>





{
  !showYellowImage && (
    <Box width={["90%","80%","50%"]} display="flex" flexDirection="column"  ml={[0,2,5,28]} >
    <Box  width={[null,null,"360px","380px","400px"]}
     height={[null,null,"360px","380px","400px"]} position="relative" mx="auto" mt={8} >
    <Box position="absolute" zIndex={999} width={[null,null,"150px","180px","200px"]} height={[null,null,"50px","55px","60px"]} bgColor="white" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.25)" borderRadius="15px" top={4} left={3} display="flex" justifyContent="center" alignItems="center" >
      <Text  fontSize={[null,null,"1.2rem","1.3rem","1.5rem"]} fontWeight={500}>Glow up!</Text>
    </Box>
    <Box position="absolute" zIndex={999} width={[null,null,"150px","180px","200px"]} height={[null,null,"50px","55px","60px"]}bgColor="white" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.25)" borderRadius="15px" bottom={[null,null,20,16,12]} right={0} display="flex" justifyContent="center" alignItems="center" >
      <Text  fontSize={[null,null,"1.2rem","1.3rem","1.5rem"]} fontWeight={500}>Flawless Skin!</Text>
    </Box>

    <Box
    
    mx="auto"
    width={[null,null,"280px","310px","350px"]}
     height={[null,null,"280px","310px","350px"]}
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="50%" 
    overflow="hidden" 
    zIndex={1}
   position="relative">
     <Image
      src={mask} 
      alt="Circular Image"
      layout="fill" 
      objectFit="cover" 
      
    />

    </Box>
    
    </Box>
    <Box
    mt={4}
    display="flex"
    justifyContent="space-around"
    alignItems="center"
    width="80%"
    mx="auto"
  
  
  >
    <Box
     width={[null,null,"100px","120px","150px"]}
     height={[null,null,"100px","120px","150px"]}
     mr={1}
      borderRadius="50%"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'relative' }}
      boxShadow="4px 8px 4px rgba(0, 0, 0, 0.1)" 
    >
      <Image
        src={cream} 
        alt="Serum"
        layout="fill"
        objectFit="cover"
      />
    </Box>

 
    <Box
        width={[null,null,"100px","120px","150px"]}
        height={[null,null,"100px","120px","150px"]}
        mr={1}
      borderRadius="50%"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'relative' }}
       boxShadow="4px 8px 4px rgba(0, 0, 0, 0.1)"
    >
      <Image
        src={creamsecond}
        alt="Cream"
        layout="fill"
        objectFit="cover"
      />
    </Box>

    <Box
       width={[null,null,"100px","120px","150px"]}
       height={[null,null,"100px","120px","150px"]}
      borderRadius="50%"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'relative' }}
       boxShadow="4px 8px 4px rgba(0, 0, 0, 0.1)"
    >
      <Image
        src={serum} 
        alt="Mask"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  </Box>

    
  </Box>
  )
}
   
  </Box>

 </Box>
 
 
  </>
  )
}

export default Main
