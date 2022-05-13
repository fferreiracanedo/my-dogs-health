import loginLogo from '../../assets/image/LoginLogo.svg';
import Logo from '../../assets/image/logo.svg';
import { Box, Flex, Image } from '@chakra-ui/react';
import Login from '../../components/Login';

const LoginPage = () => {
  return (
    <Flex
      alignItems="center"
      w="100%"
      justifyContent="space-evenly"
      height="100vh"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          m="2%"
          w="60%"
          src={Logo}
          alt="Imagem do logo da MyDogsHealth, MyDogs está em preto e a texto Health em verde"
        />
        <Image
          width="80%"
          m="2%"
          src={loginLogo}
          alt="Uma imagem para o login, um rapaz sentado fazendo carinho em seu cachorro"
        />
      </Box>
      <Box bgColor="">
        <Login />
      </Box>
    </Flex>
  );
};
export default LoginPage;
