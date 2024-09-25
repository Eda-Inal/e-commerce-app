import React from 'react'
import { Box ,Spinner} from '@chakra-ui/react'

function Loading() {
  return (
  <>
  <Box width="100%"  height="100vh" position="relative" zIndex={99999}>
    <Box display="flex" height="100%" width="100%" flexDirection="column" alignItems="center"  justifyContent="center">
<Box>  <Spinner size='lg' /></Box>
<Box>Loading...</Box>
    </Box>

  </Box>

  </>
  )
}

export default Loading
