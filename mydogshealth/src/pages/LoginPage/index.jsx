import loginLogo from '../../assets/image/LoginLogo.svg';
import Logo from '../../assets/image/logo.svg';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
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
        display={['none', "none", "flex"]}
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
          width={{ md: '70%', lg: '60%' }}
          m="2%"
          src={loginLogo}
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
