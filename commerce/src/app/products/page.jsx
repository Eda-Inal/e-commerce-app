import React from 'react'
import { Box,Text,Button } from '@chakra-ui/react'
import serum from  "../../../public/product.jpg"
import banner from  "../../../public/banner.jpg"
import Image from 'next/image'
import { IoIosAdd } from "react-icons/io";
function Products() {
  const items = Array(6).fill({});
  return (
    <>
  <Box width={["95%","90%","80%"]} mx="auto" mt={8}  >

<Box width="100%" display="flex" mx="auto" flexDirection={["column","column","column","row"]}>
<Box width={["100%","100%","90%","20%"]} mx="auto" display="flex" flexDirection="column">
  {/* banner part */}
  <Box width="100%" height={["170px","130px","150px","300px"]} textAlign="center" bgColor="#FF716A" mb={[3,3,3,0]} position="relative" borderRadius={15} display="flex" flexDirection={["row","row","row" ,"column"]} >
{/* banner img */}
{/* <Box position="absolute" bgColor="#6BB663" borderRadius="50%" width="50px" height="50px" top={1} left={8} zIndex={99} color="white" display="flex" alignItems="center" justifyContent="center" fontWeight={500}>NEW</Box> */}
<Box width={["30%","20%","20%","50%"]} height={["70%","80%","80%","40%"]}   position="relative" mt={2}   borderRadius="20%"  overflow="hidden" mx="auto" >
            <Image 
              src={banner} 
              alt="Serum Image" 
              layout="fill" 
              objectFit="cover"
              
            />
          </Box>
          {/* banner content */}
          <Box display="flex" width={["50%","60%","60%","90%"]} mx="auto" height={["90%","90%","90%","52%"]}  flexDirection="column" justifyContent="space-between" mt={2} >
            <Text fontWeight={500} >Discover Ultimate Hydration with Glow & Revive!</Text>
            <Text fontSize="14px" mt={2} fontWeight={400}>Glow & Revive Moisturize</Text>
            <Box display="flex" justifyContent={["end","end","end","center"]}>
            <Button boxShadow="4px 8px 4px rgba(0, 0, 0, 0.1)"  width={["70%","40%","30%","80%"]} borderRadius="20px" color="white" bgColor="#6BB663" mt="auto" _hover={{bgColor :"#78C970"}}>$18 Buy Now</Button>
            </Box>
           
          </Box>

  </Box>
  {/* filter part */}

</Box>



{/* right side */}
<Box width={["100%","100%","90%","75%"]}  mx="auto">
    <Box width="100%" display="flex" mx="auto" justifyContent="space-between">
<Button width="22%" height="40px" fontWeight={500} borderRadius={15} bgColor="transparent" border="1px #6BB663 solid" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.15)" fontSize={["16px","18px"]}>Serum</Button>
<Button width="22%" height="40px" fontWeight={500} borderRadius={15} bgColor="transparent" border="1px #6BB663 solid" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.15)" fontSize={["16px","18px"]}>Cream</Button>
<Button width="22%" height="40px"fontWeight={500} borderRadius={15} bgColor="transparent" border="1px #6BB663 solid" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.15)" fontSize={["16px","18px"]}>Mask</Button>
<Button width="22%" height="40px" fontWeight={500} borderRadius={15} bgColor="transparent" border="1px #6BB663 solid" boxShadow="4px 8px 4px rgba(0, 0, 0, 0.15)" fontSize={["16px","18px"]}>Toner</Button>
    </Box>
    {/* Cards */}
<Box mt={8} width="100%" mx="auto" display="flex" flexWrap="wrap" justifyContent={["center", "center", "space-between"]}>
{items.map((_, index) => (
        <Box
          key={index}
          width={["100%", "100%", "48%", "48%", "48%", "30%"]}
          boxShadow="4px 8px 4px rgba(0, 0, 0, 0.1)"
          mx={["auto", 0, 0, 0]}
          height="200px"
          bgColor="#FFFEFE"
          display="flex"
          position="relative"
          mb={6}
        >
          {/* Resim Alanı - %30 */}
          <Box width="30%" height="100%" position="relative" >
            <Image 
              src={serum} 
              alt="Serum Image" 
              layout="fill" 
              objectFit="cover" 
            />
          </Box>

          {/* Metin Alanı - %70 */}
          <Box width="70%" height="100%" p={3} display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontSize="17px" fontWeight={500}>HydraBoost Serum</Text>
            <Text mt={2}>Enhances skin tone and adds radiance.</Text>
            <Box flexGrow={1} />
            <Box display="flex" w="100%" justifyContent="space-between" alignItems="center">
              <Box>
                <Text color="#6BB663" fontSize="17px" fontWeight={500}>$14</Text>
              </Box>
              <Box>
                <Box 
                  w="35px" 
                  height="35px" 
                  borderRadius="50%" 
                  bgColor="#FF716A" 
                  cursor="pointer"
                  boxShadow="4px 8px 4px rgba(0, 0, 0, 0.1)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <IoIosAdd color="#FFFFFF" size={24} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

</Box>
</Box>
</Box>
  </Box>
    </>
  )
}

export default Products
