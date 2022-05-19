import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import logo from '../../assets/image/LogoLandign.svg';
const HeaderRegisterFinal = () => {
  return (
    <Box>
      <Flex
        flexDirection={{ base: 'column' }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading fontFamily="Inter" fontSize="26px" textAlign="center">
          Falta pouco... ainda precisamos de mais alguns dados!
        </Heading>
        <Image
          src={logo}
          maxW="360px"
          display={{ base: 'none', md: 'block' }}
        />
      </Flex>
    </Box>
  );
};
export default HeaderRegisterFinal;
