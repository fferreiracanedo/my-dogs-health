import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../src/theme/index';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        width="100%"
        justifyContent="center"
        bgColor="#2A4058"
        color="#FFF"
      >
        <Routes />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
