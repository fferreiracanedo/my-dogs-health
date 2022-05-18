import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorIcon,
  FormErrorMessage,
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
    username: yup.string().required('Nome de usuário obrigatório'),
    city: yup.string().required('Cidade obrigatória'),
    certificate: yup.string().required('Campo Obrigatório'),
    number: yup
      .string()
      .required('Numero obrigatório')
      .matches(
        '^\\([0-9]{2}\\) (([0-9]{5}-[0-9]{4})|([0-9]{5}-[0-9]{5}))$',
        'Formato inválido'
      ),
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
          <FormControl isInvalid={errors.name}>
            <FormLabel color="white" marginTop="5px" htmlFor="name">
              Nome:{' '}
            </FormLabel>
            <Input
              placeholder="Digite seu nome"
              borderColor="#855050"
              id="name"
              {...register('name')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.username}>
            <FormLabel color="white" marginTop="5px" htmlFor="username">
              Nome de usuário:
            </FormLabel>
            <Input
              placeholder="Digite seu sobrenome"
              borderColor="#855050"
              id="username"
              {...register('username')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.city}>
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
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.city && errors.city.message}
            </FormErrorMessage>
          </FormControl>
          <FormLabel ormLabel color="white" marginTop="5px" htmlFor="type">
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
              <FormControl isInvalid={errors.certificate}>
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
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.certificate && errors.certificate.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.number}>
                <FormLabel color="white" marginTop="5px" htmlFor="number">
                  Número de contato:
                </FormLabel>
                <Input
                  placeholder="(dd) 99999-0000"
                  id="number"
                  {...register('number')}
                ></Input>
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.number && errors.number.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel
                  color="white"
                  marginTop="5px"
                  htmlFor="googleCalendar"
                >
                  Calendário do google:
                </FormLabel>
                <Input
                  placeholder="Digite seu certificado"
                  id="certificate"
                  {...register('googleCalendar')}
                ></Input>
              </FormControl>
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
        </form>
      </Flex>
    </Box>
  );
};
export default FormProfile;
