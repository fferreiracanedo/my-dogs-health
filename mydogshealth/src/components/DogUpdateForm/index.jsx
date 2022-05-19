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

  import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from "@chakra-ui/react";

  import * as yup from 'yup';
  import { useForm } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  
  import { useSelector, useDispatch } from 'react-redux';
  import { dogUpdateThunk } from '../../store/modules/api/thunks';
  
  const DogUpdateForm = ({ onClose, dogdata }) => {
    const toast = useToast();
  
    const dogRegisterSchema = yup.object().shape({
        dogId: yup.string().required(),
        name: yup.string().required(),
      breed: yup.string().required(),
      imgUrl: yup
        .string()
        .required()
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
    console.log("token dog",token);
    const dispatch = useDispatch();
    const onSubmitFunction = data => {
      console.log(data,token);
      dispatch(dogUpdateThunk(token, data.dogId, data.imgUrl, data.name, data.breed));
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

          <FormControl padding="12px" isInvalid={errors.dogId}>
              <Input
                borderColor="#855050"
                width="100%"
                value={dogdata.id}
                {...register('dogId')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.dogId && errors.dogId.message}
              </FormErrorMessage>
            </FormControl>


            <FormControl padding="12px" isInvalid={errors.name}>
            <Editable defaultValue={dogdata.name}>
            <EditablePreview />
            <EditableInput
                borderColor="#855050"
                width="100%"
                placeholder="Nome"
                {...register('name')} />
            </Editable>
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
  
            <FormControl padding="12px" isInvalid={errors.breed}>
            <Editable defaultValue={dogdata.breed}>
                <EditablePreview />
                <EditableInput
                borderColor="#855050"
                width="100%"
                placeholder="Raça"
                {...register('breed')}
              />
              </Editable>
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.breed && errors.breed.message}
              </FormErrorMessage>
            </FormControl>
  
            <FormControl padding="12px" isInvalid={errors.imgUrl}>
            <Editable defaultValue={dogdata.thumb}>
                <EditablePreview />
                <EditableInput
                borderColor="#855050"
                width="100%"
                placeholder="Imagem do seu doguinho"
                {...register('imgUrl')}
              />
              </Editable>
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.imgUrl && errors.imgUrl.message}
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
  export default DogUpdateForm;
  