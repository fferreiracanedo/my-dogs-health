import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const FormProfilePage = () => {
  const loginSchema = yup.object().shape({
    // name: yup.string().required('Nome obrigatório'),
    // city: yup.string().required('Cidade obrigatória'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmitFunction = data => {
    //esquema feito para a pessoa não mandar dados em branco e atualizar o que não deseja
    let result = {};
    for (let i in data) {
      if (data[i].trim() !== '') {
        result[i] = data[i];
      }
    }
    console.log(result);
  };
  return (
    <Box bgColor="#8E2C2C" padding="20px" borderRadius="15px" w="288px">
      <Flex>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormControl>
            <FormLabel color="white" marginTop="5px" htmlFor="name">
              Nome:{' '}
              {errors.name && (
                <Text as={'span'} color="#2b0d0d">
                  {errors.name.message}!
                </Text>
              )}
            </FormLabel>
            <Input
              placeholder="Digite seu nome"
              borderColor="#855050"
              id="name"
              {...register('name')}
            />
            <FormLabel color="white" marginTop="5px" htmlFor="lastName">
              Sobrenome:
            </FormLabel>
            <Input
              placeholder="Digite seu sobrenome"
              borderColor="#855050"
              id="lastName"
              {...register('lastName')}
            />
            <FormLabel color="white" marginTop="5px" htmlFor="city">
              Cidade:
              {errors.city && (
                <Text as={'span'} color="#2b0d0d">
                  {errors.city.message}!
                </Text>
              )}
            </FormLabel>
            <Input
              placeholder="Digite seu cidade"
              borderColor="#855050"
              id="city"
              {...register('city')}
            />
            <FormLabel color="white" marginTop="5px" htmlFor="bio">
              Bio:
            </FormLabel>
            <Input
              as={'textarea'}
              placeholder="Digite aqui algo sobre você"
              {...register('bio')}
              height="80px"
            ></Input>
            <Flex justifyContent="space-between">
              <Button type="submit" width="45%" bgColor="#FED7D7">
                Editar
              </Button>
              <Button width="45%" bgColor="black" color="white">
                Deletar Conta
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};
export default FormProfilePage;
