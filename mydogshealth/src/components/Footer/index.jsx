import { Box, Flex, Image, Text } from '@chakra-ui/react';
import imgFooter from '../../Footer.svg';

import Greeting from '../greeting';

const Footer = () => {
  return (
    <Flex flexDirection="column">
      <Box display="flex" w="100vw" justifyContent="center">
        <Box w="45vw" m="1vw" display="flex" justifyContent="center">
          <Image w="30vw" m="10%" src={imgFooter} />
        </Box>
        <Box w="45vw" m="1vw" display="flex" alignItems="center">
          <Text w="50vw" fontSize={{ base: '18px', md: '36px', lg: '52px' }}>
            Deixe com que a <Text>MyDogHealth</Text> cuide do seu cãozinho
          </Text>
        </Box>
      </Box>
      <Box flexDir="row" display="flex" justifyContent="center">
        <Box marginTop="20px">
          <Greeting />
        </Box>
      </Box>
    </Flex>
  );
};
export default Footer;
