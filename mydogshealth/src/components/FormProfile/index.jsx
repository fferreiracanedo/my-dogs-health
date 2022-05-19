import {
  Box,
  Button,
  Checkbox,
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

import { useDispatch } from 'react-redux';
import { profileThunk } from '../../store/modules/api/thunks';
import { useSelector } from 'react-redux';

const FormProfile = () => {
  const [isSpecialist, setIsSpecialist] = useState(false);
  const loginSchema = yup.object().shape({
    thumb: yup.string(),
    name: yup.string().required('Nome obrigatório'),
    username: yup.string().required('Nome de usuário obrigatório'),
    city: yup.string().required('Cidade obrigatória'),
    specialist: yup.boolean(),
    association: yup.string().when("specialist", {
      is: true,
      then: yup.string().required('CRMV obrigatório')
    }),
    contact: yup
      .string()
      /*.matches(
        '^\\([0-9]{2}\\) (([0-9]{5}-[0-9]{4})|([0-9]{5}-[0-9]{5}))$',
        'Formato inválido'
      )*/,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });


  const token = useSelector(state => state.user.profile.token);
  console.log("token",token);
  const dispatch = useDispatch();
  const onSubmitFunction = data => {
    console.log("formprofile",token, data.thumb, data.name, data.username, data.city, data.specialist,
    data.association, data.contact, data.bio);
      dispatch(profileThunk(token, data.thumb, data.name, data.username, data.city, data.specialist,
        data.association, data.contact, data.bio));
    };

  
  return (
    <Box bgColor="#8E2C2C" padding="20px" borderRadius="15px">
      <Flex>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          
        <FormControl isInvalid={errors.thumb}>
            <FormLabel color="white" marginTop="5px" htmlFor="name">
              Thumb:{' '}
            </FormLabel>
            <Input
              placeholder="Link do avatar"
              borderColor="#855050"
              id="thumb"
              {...register('thumb')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.thumb && errors.thumb.message}
            </FormErrorMessage>
          </FormControl>

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

          <FormControl isInvalid={errors.specialist}>
            <FormLabel color="white" marginTop="5px" htmlFor="specialist">
            </FormLabel>
            <Checkbox
              borderColor="#855050"
              id="specialist"
              {...register('specialist')}
            >Especialista com CRVM?</Checkbox>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.specialist && errors.specialist.message}
            </FormErrorMessage>
          </FormControl>


              <FormControl isInvalid={errors.association}>
                <FormLabel color="white" marginTop="5px" htmlFor="association">
                  Certificado CRMV:
                </FormLabel>
                <Input
                  placeholder="Digite seu certificado"
                  id="association"
                  {...register('association')}
                ></Input>
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.association && errors.association.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.contact}>
                <FormLabel color="white" marginTop="5px" htmlFor="contact">
                  Número de contato:
                </FormLabel>
                <Input
                  placeholder="(dd) 99999-0000"
                  id="contact"
                  {...register('contact')}
                ></Input>
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.contact && errors.contact.message}
                </FormErrorMessage>
              </FormControl>

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
