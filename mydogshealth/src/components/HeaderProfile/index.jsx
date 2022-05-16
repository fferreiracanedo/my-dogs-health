import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/image/LogoLandign.svg';
import { FaDog } from 'react-icons/fa';
const HeaderProfile = () => {
  return (
    <Flex
      w={{ base: '90%', md: '75%' }}
      margin="0 auto"
      justifyContent="space-around"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box margin="10px auto">
        <Image src={logo} w="300px"></Image>
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="space-evenly"
        margin="0 auto"
      >
        <Heading fontFamily="Inter">Seu nome aqui</Heading>
        <Box
          bgColor="white"
          w="30%"
          borderRadius="8px"
          border="2px solid black"
          _hover={{
            bgColor: 'black',
            color: 'white',
          }}
        >
          <Text textAlign="center" fontWeight="bolder">
            Tutor
          </Text>
        </Box>
        <Text maxW="320px">Seu endereço:undefined</Text>
        <Box>
          <Flex>
            <FaDog /> <Text marginLeft="20px">Quantidade: 5</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
export default HeaderProfile;
