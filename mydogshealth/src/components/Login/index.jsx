import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const loginSchema = yup.object().shape({
    email: yup.string().required('Email Obrigatório').email('Email Inválido'),
    password: yup.string().required('Senha Obrigatória'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = data => console.log(data);

  return (
    <Flex w="100%">
      <Box w="100%" bgColor="#EEC0C0" padding="20px" borderRadius="10px">
        <Text fontWeight="bold" fontSize="20px" color="white" marginTop="20px">
          Login
        </Text>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormControl padding="12px" isInvalid={errors.email}>
            <Input
              borderColor="#855050"
              width="30vw"
              placeholder="Digite seu E-mail"
              {...register('email')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl padding="12px" isInvalid={errors.password}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Digite sua Senha"
                {...register('password')}
              />
              <InputRightElement width="4.5rem">
                <Button
                  marginRight="5%"
                  h="1.75rem"
                  fontSize="12px"
                  size="lg"
                  onClick={handleClick}
                >
                  {show ? <GrFormViewHide /> : <GrFormView />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            marginTop="20px"
            marginLeft="38%"
            type="submit"
            colorScheme="#2c2121"
            color="white"
            bgColor="#962C2C"
            marginBottom="20px"
          >
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
export default Login;
