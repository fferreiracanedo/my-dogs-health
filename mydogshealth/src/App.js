import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../src/theme/index';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
      <Flex height="100vh" backgroundColor="#FED7D7">
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
