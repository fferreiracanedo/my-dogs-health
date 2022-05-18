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
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const DogRegisterForm = ({ onClose }) => {
  const toast = useToast();

  const dogRegisterSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    breed: yup.string().required('Raça Obrigatória'),
    birthDate: yup.string().required('Data de Nascimento Obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dogRegisterSchema),
  });

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

  return (
    <Flex w="100%">
      <Box w="100%" bgColor="#fff" padding="20px" borderRadius="10px" display="flex" alignItems="center">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormControl padding="12px" isInvalid={errors.name}>
            <Input
              borderColor="#855050"
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
              borderColor="#855050"
              width="100%"
              placeholder="Raça"
              {...register('breed')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.breed && errors.breed.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl padding="12px" isInvalid={errors.birthDate}>
            <FormLabel>Data de Nascimento</FormLabel>
            <Input
              type="date"
              borderColor="#855050"
              width="100%"
              placeholder="Digite a Data de Nascimento"
              {...register('birthDate')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.birthDate && errors.birthDate.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            marginTop="20px"
            marginLeft="28%"
            type="submit"
            colorScheme="#2c2121"
            color="white"
            bgColor="#962C2C"
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
