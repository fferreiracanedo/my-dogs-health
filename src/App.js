import React from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import theme from '../src/theme/index';
import Routes from './routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex width="100%" bgColor="#2A4058" color="#FFF">
        <Routes />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
