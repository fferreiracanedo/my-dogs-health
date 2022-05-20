import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  Input,
  FormLabel,
  useToast,
  Select,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSelector, useDispatch } from 'react-redux';
import { dogRegisterThunk } from '../../store/modules/api/thunks';

const DogRegisterForm = ({ onClose }) => {
  const toast = useToast();

  const dogRegisterSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    breed: yup.string().required('Raça Obrigatória'),
    birth: yup.string().required('Data de Nascimento Obrigatória'),
    gender: yup.string().required('Gênero Obrigatório'),
    imgUrl: yup
      .string()
      .required('Link de imagem obrigatória')
      .url('Formato inválido'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dogRegisterSchema),
  });


  const token = useSelector(state => state.user.profile.token);
  const dispatch = useDispatch();
  const onSubmitFunction = data => {
    dispatch(dogRegisterThunk(token, data.imgUrl, data.name, data.breed, data.gender, data.birth));
    onClose();
    //token, thumb, name, breed, gender, birth
  };
/*
  const onSubmitFunction = data => {
    console.log(data);
    onClose();
    toast({
      title: 'Cão Adicionado com Sucesso!',
      description: 'Verifique a pagina de cães para mais detalhes',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
  };
*/
  return (
    <Flex w="100%">
      <Box
        w="100%"
        bgColor="#fff"
        padding="20px"
        borderRadius="10px"
        display="flex"
        alignItems="center"
      >
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormControl padding="12px" isInvalid={errors.name}>
            <Input
              borderColor="#2a4058"
              width="100%"
              placeholder="Nome"
              {...register('name')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl padding="12px" isInvalid={errors.breed}>
            <Input
              borderColor="#2a4058"
              width="100%"
              placeholder="Raça"
              {...register('breed')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.breed && errors.breed.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl padding="12px" isInvalid={errors.gender}>
            <FormLabel htmlFor="gender">Gênero:</FormLabel>
            <Select {...register('gender')} id="gender">
              <option value="macho">Macho</option>
              <option value="fêmea">Fêmea</option>
            </Select>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.gender && errors.gender.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl padding="12px" isInvalid={errors.imgUrl}>
            <Input
              borderColor="#2a4058"
              width="100%"
              placeholder="Imagem do seu doguinho"
              {...register('imgUrl')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.imgUrl && errors.imgUrl.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl padding="12px" isInvalid={errors.birth}>
            <FormLabel>Data de Nascimento:</FormLabel>
            <Input
              type="date"
              borderColor="#2a4058"
              width="100%"
              placeholder="Digite a Data de Nascimento"
              {...register('birth')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.birth && errors.birth.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            marginTop="20px"
            marginLeft="28%"
            type="submit"
            colorScheme="#2c2121"
            color="white"
            bgColor="#2a4058"
            marginBottom="20px"
          >
            Registrar
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
export default DogRegisterForm;
