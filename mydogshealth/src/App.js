import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../src/theme/index';
import Routes from './routes';
import Contato from './components/Contatos';
import DashBoard from './components/Contatos';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
      <Flex
        width="100%"
        justifyContent="center"
        height="100vh"
        backgroundColor="#FED7D7"
      >
        <DashBoard />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
