import { Box, Flex, Image } from '@chakra-ui/react';

import Logo from '../../assets/image/logo.svg';
import Login from '../../components/Login';

const LoginPage = () => {
  return (
    <Flex
      alignItems="center"
      w="100%"
      justifyContent="space-evenly"
      height="100vh"
    >
      <Box
        w="50%"
        display={['none', 'none', 'flex']}
        flexDirection="column"
        alignItems="center"
      >
        <Image
          m="2%"
          w={{ md: '50%' }}
          src={Logo}
          alt="Imagem do logo da MyDogsHealth, MyDogs está em preto e a texto Health em verde"
        />
        <Image
          boxShadow="-webkit-box-shadow: 0px 5px 15px 4px rgba(226,225,227,0.55); 
          box-shadow: 0px 5px 15px 4px rgba(226,225,227,0.55);"
          borderRadius="8px"
          width={{ md: '70%', lg: '60%' }}
          m="2%"
          src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-animal-de-estimacao-isolado_23-2149192357.jpg?t=st=1653169243~exp=1653169843~hmac=8b31aedb73891172e85cc1d1121ce5ef939559b57848c8da08b667d0d64145d0&w=740"
          alt="Uma imagem para o login, um rapaz sentado fazendo carinho em seu cachorro"
        />
      </Box>
      <Box width={{ md: '50%' }} display="flex" justifyContent="center">
        <Login />
      </Box>
    </Flex>
  );
};
export default LoginPage;
