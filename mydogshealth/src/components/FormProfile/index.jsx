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
} from '@chakra-ui/react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useDispatch } from 'react-redux';
import { profileThunk } from '../../store/modules/api/thunks';
import { useSelector } from 'react-redux';

const FormProfile = () => {
  const loginSchema = yup.object().shape({
    thumb: yup.string(),
    name: yup.string().required('Nome obrigatório'),
    username: yup.string().required('Nome de usuário obrigatório'),
    city: yup.string().required('Cidade obrigatória'),
    specialist: yup.boolean(),
    association: yup.string().when('specialist', {
      is: true,
      then: yup.string().required('CRMV obrigatório'),
    }),
    contact: yup.string(),
    /*.matches(
        '^\\([0-9]{2}\\) (([0-9]{5}-[0-9]{4})|([0-9]{5}-[0-9]{5}))$',
        'Formato inválido'
      )*/
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const token = useSelector(state => state.user.profile.token);
  const dispatch = useDispatch();
  const onSubmitFunction = data => {
    console.log(
      'formprofile',
      token,
      data.thumb,
      data.name,
      data.username,
      data.city,
      data.specialist,
      data.association,
      data.contact,
      data.bio
    );
    dispatch(
      profileThunk(
        token,
        data.thumb,
        data.name,
        data.username,
        data.city,
        data.specialist,
        data.association,
        data.contact,
        data.bio
      )
    );
  };

  return (
    <Box bgColor="#fff" padding="20px" borderRadius="15px">
      <Flex>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormControl isInvalid={errors.thumb}>
            <FormLabel marginTop="5px" htmlFor="name" color="#26226B">
              Thumb:{' '}
            </FormLabel>
            <Input
              placeholder="Link do avatar"
              borderColor="black"
              id="thumb"
              {...register('thumb')}
              _placeholder={{ opacity: 1, color: '#2A4058' }}
              color="black"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.thumb && errors.thumb.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.name}>
            <FormLabel marginTop="5px" htmlFor="name" color="#26226B">
              Nome:{' '}
            </FormLabel>
            <Input
              placeholder="Digite seu nome"
              borderColor="black"
              id="name"
              {...register('name')}
              _placeholder={{ opacity: 1, color: '#2A4058' }}
              color="black"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.username}>
            <FormLabel marginTop="5px" htmlFor="username" color="#26226B">
              Nome de usuário:
            </FormLabel>
            <Input
              placeholder="Digite seu nome de usuário"
              borderColor="black"
              id="username"
              {...register('username')}
              _placeholder={{ opacity: 1, color: '#2A4058' }}
              color="black"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.city}>
            <FormLabel color="#26226B" marginTop="5px" htmlFor="city">
              Cidade:
            </FormLabel>
            <Input
              placeholder="Digite seu cidade"
              borderColor="black"
              id="city"
              {...register('city')}
              _placeholder={{ opacity: 1, color: '#2A4058' }}
              color="black"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.city && errors.city.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.specialist}>
            <FormLabel
              color="#26226B"
              marginTop="5px"
              htmlFor="specialist"
            ></FormLabel>
            <Checkbox
              borderColor="black"
              id="specialist"
              {...register('specialist')}
              color="#26226B"
            >
              Especialista com CRVM?
            </Checkbox>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.specialist && errors.specialist.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.association}>
            <FormLabel color="#26226B" marginTop="5px" htmlFor="association">
              Certificado CRMV:
            </FormLabel>
            <Input
              placeholder="Digite seu certificado"
              id="association"
              borderColor="black"
              {...register('association')}
              _placeholder={{ opacity: 1, color: '#2A4058' }}
              color="black"
            ></Input>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.association && errors.association.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.contact}>
            <FormLabel color="#26226B" marginTop="5px" htmlFor="contact">
              Número de contato:
            </FormLabel>
            <Input
              placeholder="(dd) 99999-0000"
              id="contact"
              borderColor="black"
              {...register('contact')}
              _placeholder={{ opacity: 1, color: '#2A4058' }}
              color="black"
            ></Input>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.contact && errors.contact.message}
            </FormErrorMessage>
          </FormControl>

          <FormLabel color="#26226B" marginTop="5px" htmlFor="bio">
            Bio:
          </FormLabel>
          <Input
            as={'textarea'}
            placeholder="Digite aqui algo sobre você"
            {...register('bio')}
            borderColor="black"
            height="80px"
            _placeholder={{ opacity: 1, color: '#2A4058' }}
            color="black"
          ></Input>
          <Button
            type="submit"
            width="100%"
            bgColor="#2A4058"
            _hover={{
              bgColor: '#fff',
              color: '#2A4058',
              border: '2px solid #2A4058',
            }}
          >
            Enviar
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
export default FormProfile;
