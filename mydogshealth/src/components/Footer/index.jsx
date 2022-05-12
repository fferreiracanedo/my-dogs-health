import { Box, Flex, Image, Text } from '@chakra-ui/react';
import imgFooter from '../../Footer.svg';
import { FcLike } from 'react-icons/fc';

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
      <Box display="flex" justifyContent="center">
        <Text fontSize="0.7rem">
          Desenvolvido com <FcLike /> por Equipe-4
        </Text>
      </Box>
    </Flex>
  );
};
export default Footer;
