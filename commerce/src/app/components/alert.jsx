' use client'
import React , {useEffect} from 'react'
import { Box,Text } from '@chakra-ui/react'
import { CiCircleCheck } from "react-icons/ci";
import { TbShoppingBagX } from "react-icons/tb";
import { useSelector,useDispatch } from 'react-redux';
import { setIsAlert } from '../redux/commerceSlice';
function Alert() {
    const dispatch = useDispatch()
    const {alertMessage,isAlert} = useSelector((state) => state.commerce)
    useEffect(() => {
        if (isAlert) {
          const timer = setTimeout(() => {
            dispatch(setIsAlert(false)); 
          }, 2000);
          return () => clearTimeout(timer);
        }
      }, [isAlert, dispatch]);
  return (
    <>
    {
        isAlert && (
            <Box position="absolute" top={2} right={2} bgColor={alertMessage.bg} maxWidth="400px" maxHeight="100px" zIndex={999999} borderRadius={5} display="flex" alignItems="center" justifyContent="center" p={4}>
            <Box mr={1}><alertMessage.icon size="1.3rem"/></Box>
            <Box fontSize="1rem"><Text>{alertMessage.message}</Text></Box>
            
                </Box>
        )
    }
   
    </>
  )
}

export default Alert
