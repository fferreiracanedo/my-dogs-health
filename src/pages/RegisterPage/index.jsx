import { Flex, Box, Image } from '@chakra-ui/react';
import Logo from '../../assets/image/logo.svg';
import RegisterLogo from '../../assets/image/registerLogo.svg';
import Form from '../../components/Form';

const RegisterPage = () => {
  return (
    <Flex width="100%" height="100vh" alignItems="center"  justifyContent="center">
      <Box
        w="50%"
        display={['none', 'none', 'flex']}
        flexDirection="column"
        alignItems="center"
      >
        <Image
          m="2%"
          w={{ md: '60%' }}
          src={Logo}
          alt="Imagem do logo da MyDogsHealth, MyDogs está em preto e a texto Health em verde"
        />
        <Image
          width={{ md: '70%', lg: '60%' }}
          m="2%"
          alt="Uma imagem para o login, um rapaz sentado fazendo carinho em seu cachorro"
          src={RegisterLogo}
        ></Image>
      </Box>
      <Box w={{ md: '50%' }} display="flex" justifyContent="center">
        <Form />
      </Box>
    </Flex>
  );
};

export default RegisterPage;
