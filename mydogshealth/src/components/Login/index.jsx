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

import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/modules/api/thunks';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
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

  const dispatch = useDispatch();
  const onSubmitFunction = data => {
    dispatch(loginThunk(data.email, data.password));
  };

  return (
    <Flex justifyContent="center" width="90%">
      <Box
        width="100%"
        maxWidth="400px"
        bgColor="#FFF"
        padding="20px"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize="20px" color="#2A4058" marginTop="20px">
          Login
        </Text>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <FormControl padding="12px" isInvalid={errors.email} width="100%">
              <Input
                color="#000"
                w="100%"
                borderColor="#855050"
                placeholder="Digite seu E-mail"
                {...register('email')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.password}>
              <InputGroup>
                <Input
                  color="#000"
                  w="100%"
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
              width="130px"
              marginTop="20px"
              type="submit"
              colorScheme="#2c2121"
              color="white"
              bgColor="#2A4058"
              marginBottom="20px"
              _hover={{
                background: '#FFF',
                color: '#000',
                border: '2px solid #000',
              }}
            >
              Login
            </Button>
          </Box>
        </form>
        <Box display="flex" flexDirection="column">
          <Text fontSize="10px" color="#9b9191" fontWeight="700">
            Ainda nao possui cadastro?{' '}
          </Text>
          <Button
            width="130px"
            marginTop="20px"
            type="submit"
            colorScheme="#2c2121"
            color="white"
            bgColor="#2A4058"
            marginBottom="20px"
            onClick={() => history.push('/register')}
            _hover={{
              background: '#FFF',
              color: '#000',
              border: '2px solid #000',
            }}
          >
            Clique Aqui
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
export default Login;
