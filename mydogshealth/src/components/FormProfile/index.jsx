import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const FormProfile = () => {
  const [isSpecialist, setIsSpecialist] = useState(false);
  const loginSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    city: yup.string().required('Cidade obrigatória'),
    certificate: yup.string().required('Campo Obrigatório'),
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
    <Box bgColor="#8E2C2C" padding="20px" borderRadius="15px">
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
            <FormLabel color="white" marginTop="5px" htmlFor="type">
              Selecione sua categoria:
            </FormLabel>
            <Select
              id="type"
              onChange={e => {
                if (e.target.value === 'Especialista Veterinário') {
                  setIsSpecialist(true);
                } else {
                  setIsSpecialist(false);
                }
              }}
            >
              <option>Especialista Veterinário</option>
              <option selected>Proprietário de Doguinhos</option>
            </Select>
            {isSpecialist === true && (
              <>
                <FormLabel color="white" marginTop="5px" htmlFor="certificate">
                  Certificado CRMV:
                  {errors.certificate && (
                    <Text as={'span'} color="#2b0d0d">
                      {errors.certificate.message}!
                    </Text>
                  )}
                </FormLabel>
                <Input
                  placeholder="Digite seu certificado"
                  id="certificate"
                  {...register('certificate')}
                ></Input>
              </>
            )}
            <FormLabel color="white" marginTop="5px" htmlFor="bio">
              Bio:
            </FormLabel>
            <Input
              as={'textarea'}
              placeholder="Digite aqui algo sobre você"
              {...register('bio')}
              height="80px"
            ></Input>
            <Button type="submit" width="100%" bgColor="#FED7D7">
              Enviar
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};
export default FormProfile;
