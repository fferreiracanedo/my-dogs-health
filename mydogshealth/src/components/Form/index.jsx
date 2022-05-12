import {
  Flex,
  Box,
  Text,
  FormControl,
  Input,
  FormErrorIcon,
  FormErrorMessage,
  Select,
  Button,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup.string().required('Email Obrigatório').email('Email Inválido'),
    password: yup.string().required('Senha Obrigatória'),
    confirmPassword: yup.string().required('Digite a confirmação da Senha'),
    category: yup.string().required('Categoria Obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = data => console.log(data);

  return (
    <Flex>
      <Box
        width="60vw"
        display="flex"
        flexDir="column"
        bgColor="#EEC0C0"
        alignContent="center"
        alignItems="center"
        borderRadius="8px"
        marginRight="2%"
        marginTop="10px"
      >
        <Text fontSize="20px" color="white" marginTop="20px">
          Registro
        </Text>

        <Box>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <FormControl padding="12px" isInvalid={errors.name}>
              <Input
                borderColor="#855050"
                width="50vw"
                placeholder="Digite seu Nome"
                {...register('name')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.email}>
              <Input
                borderColor="#855050"
                width="50vw"
                placeholder="Digite seu Email"
                {...register('email')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl padding="12px" isInvalid={errors.password}>
              <Input
                borderColor="#855050"
                width="50vw"
                placeholder="Digite sua Senha"
                {...register('password')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl padding="12px" isInvalid={errors.passwordConfirm}>
              <Input
                borderColor="#855050"
                width="50vw"
                placeholder="Confirme sua Senha"
                {...register('passwordConfirm')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.passwordConfirm && errors.passwordConfirm.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl padding="12px">
              <Select
                borderColor="#855050"
                width="50vw"
                placeholder="Escolha sua Categoria"
                {...register('category')}
              >
                <option>Cachorro</option>
                <option>Especialista</option>
              </Select>
            </FormControl>
            <Box padding="12px" marginTop="20px" marginLeft="25%">
              <Button
                colorScheme="#2c2121"
                color="white"
                bgColor="#962C2C"
                type="submit"
              >
                Registrar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
export default Form;
