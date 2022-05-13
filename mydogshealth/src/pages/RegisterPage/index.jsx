import { Flex, Box, Text, Image } from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/Form';
import Logo from '../../assets/image/logo.svg';
import RegisterLogo from '../../assets/image/registerLogo.svg';

const RegisterPage = () => {
  return (
    <Flex flexDir="row">
      <Box marginTop="10px" marginRight="1%">
        <Image
          src={Logo}
          alt="Imagem do logo da MyDogsHealth, MyDogs está em preto e a texto Health em verde"
        ></Image>
        <Image
          width="80%"
          marginTop="10px"
          marginLeft="1%"
          src={RegisterLogo}
          alt="Uma imagem para o registro, uma moça voando com seu cachorro"
        ></Image>
      </Box>
      <Box>
        <Form />
      </Box>
    </Flex>
  );
};
export default RegisterPage;
