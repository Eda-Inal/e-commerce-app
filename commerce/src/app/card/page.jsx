import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaCaretLeft } from "react-icons/fa6"
import { BsHandbag } from "react-icons/bs";
function Card() {
    return (
        <>
            <Box width={["100%", "70%", "50%", "40%", "35%", "30%"]} zIndex={9999} height="100vh" bgColor="#FFF6F5" position="fixed" top={0} right={0}  >
                <Box display="flex" flexDirection="column" width="90%" mx="auto" >
                    {/* header */}
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <FaCaretLeft color="#FF716A" />
                        <FaCaretLeft color="#FF716A" />
                        <Text ml={2} color="#FF716A" fontWeight={400} letterSpacing="0.15rem" fontSize="1.2rem">Continue Shopping</Text>
                    </Box>
                    {/* Under header bag and icons */}
                    <Box display="flex" mt={5} justifyContent="space-between" width="100%" mx="auto" >
                        {/* left part */}
                        <Box display="flex" alignItems="center">
                            <Text>Your Bag</Text>
                            <BsHandbag />
                        </Box>

                        <Text><Box as="span" fontWeight={500} >3</Box> items</Text>
                    </Box>

                    {/* card boxes */}



                </Box>
            </Box>

        </>
    )
}

export default Card


