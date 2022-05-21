import { Flex, Box, Image } from '@chakra-ui/react';
import Logo from '../../assets/image/logo.svg';
import RegisterLogo from '../../assets/image/registerLogo.svg';
import Form from '../../components/Form';

const RegisterPage = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
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
          boxShadow="-webkit-box-shadow: 0px 5px 15px 4px rgba(226,225,227,0.55); 
          box-shadow: 0px 5px 15px 4px rgba(226,225,227,0.55);"
          borderRadius="8px"
          width={{ md: '70%', lg: '60%' }}
          m="2%"
          alt="Uma imagem para o login, um rapaz sentado fazendo carinho em seu cachorro"
          src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?t=st=1653169243~exp=1653169843~hmac=41b59cdba4694b568ec682059344f098ca67480865b93169b5063690d707cdab&w=900"
        ></Image>
      </Box>
      <Box w={{ md: '50%' }} display="flex" justifyContent="center">
        <Form />
      </Box>
    </Flex>
  );
};

export default RegisterPage;
