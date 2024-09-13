import React from 'react'
import { Box, Text,Button } from '@chakra-ui/react'
import { FaCaretLeft } from "react-icons/fa6"
import { BsHandbag } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Image from 'next/image';
import serum from  "../../../public/product.jpg"
function Card() {
    return (
        <>
            <Box width={["100%", "70%", "50%", "40%", "35%", "30%"]} zIndex={9999} height="100vh" bgColor="#FFF6F5" position="fixed" top={0} right={0} boxShadow="-12px 4px 4px rgba(0, 0, 0, 0.25)" >
                <Box display="flex" flexDirection="column" width="90%" mx="auto" height="98vh">
                    <Box>
                        
                    </Box>
                    {/* header */}
                    
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <FaCaretLeft color="#FF716A" />
                        <FaCaretLeft color="#FF716A" />
                        <Text ml={2} color="#FF716A" fontWeight={400} letterSpacing="0.15rem" fontSize="1.2rem">Continue Shopping</Text>
                    </Box>
                    {/* Under header bag and icons */}
                    <Box display="flex" mt={8} justifyContent="space-between" width="100%" mx="auto" >
                        {/* left part */}
                        <Box display="flex" alignItems="center">
                            <Text mr={1} letterSpacing="0.08rem">Your Bag</Text>
                            <BsHandbag />
                        </Box>

                        <Text><Box as="span" fontWeight={500} >3</Box> items</Text>
                    </Box  >

                    {/* card boxes */}
                    <Box height="75vh" width="100%" overflowY="auto">
                    <Box width="100%" mt={8} display="flex" alignItems="center"  justifyContent="space-between" height="90px" >
    {/* icon */}
<Box width="10%" cursor="pointer"><FaRegTrashCan/></Box>
{/* products */}
<Box width="65%" height="100%" display="flex" justifyContent="space-around" >
    <Box width="30%"   >
    <Box width="100%" height="100%" position="relative">
  <Image src={serum} alt="Serum Image" layout="fill" objectFit="cover" />
</Box>

    </Box>
    <Box width="60%" fontSize="14px"  display="flex" flexDirection="column" justifyContent="space-around">
        <Text>Hydroboost serum</Text>
        <Text fontWeight={500}>$15</Text>
         </Box>
</Box>
{/* amount */}
<Box width="20%" display="flex" justifyContent="space-around" alignItems="center">
<Box cursor="pointer"><FiMinusCircle /></Box>
<Text>2</Text>
<Box cursor="pointer"><FiPlusCircle /></Box>
</Box>
</Box>





                    </Box>

{/* button */}


<Button bgColor="#FF716A" color="white"mx="auto" height="6vh" width="70%" mt="auto" _hover={{bgColor:"#FF9792"}}  >$50 CHECKOUT</Button>
                </Box>
             
                    
              
            
              
            </Box>

        </>
    )
}

export default Card


