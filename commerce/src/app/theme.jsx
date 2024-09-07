// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
   
      body: {
        bg: 'gray.100', 
        color: 'black',
      },
    },
  },
});

export default theme;
