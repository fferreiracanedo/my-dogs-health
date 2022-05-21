import { Box, Flex, Image, Text } from '@chakra-ui/react';

import Greeting from '../greeting';

const Footer = () => {
  return (
    <Flex flexDirection="column">
      <Box display="flex" w="100vw" justifyContent="center">
        <Box w="45vw" m="1vw" display="flex" justifyContent="center">
          <Image
            borderRadius="8px"
            w="40vw"
            m="10%"
            src="https://img.freepik.com/fotos-gratis/golden-retriever-creme-ingles-isolado_155003-32567.jpg?t=st=1653145051~exp=1653145651~hmac=a32cd0fddb3d81f439d9f691cf9254b4ddf2a122abb95dc55b69fc7a6526bf9a&w=740"
          />
        </Box>
        <Box w="45vw" m="1vw" display="flex" alignItems="center">
          <Text w="50vw" fontSize={{ base: '18px', md: '36px', lg: '52px' }}>
            Deixe que a
            <Text color="#121111">
              MyDogs
              <Text as="span" color="#319795">
                Health
              </Text>
            </Text>
            cuide do seu cãozinho
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center"></Box>
    </Flex>
  );
};
export default Footer;
