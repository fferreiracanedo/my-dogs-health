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

import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from '@chakra-ui/react';

import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useDispatch } from 'react-redux';
import { reportRegisterThunk } from '../../store/modules/api/thunks';
import { useSelector } from 'react-redux';

const FormReport = ({ dogId }) => {
  const loginSchema = yup.object().shape({
    dogId: yup.string(dogId),
    action: yup.string().required(),
    title: yup.string().required(),
    date: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const token = useSelector(state => state.user.profile.token);
  console.log('token', token);
  const dispatch = useDispatch();
  const onSubmitFunction = data => {
    console.log(
      'formReport',
      token,
      data.dogId,
      data.action,
      data.title,
      data.notes,
      data.date
    );
    dispatch(
      reportRegisterThunk(
        token,
        data.dogId,
        data.action,
        data.title,
        data.notes,
        data.date
      )
    );
  };

  return (
    <Box bgColor="#2A4058" padding="20px" borderRadius="15px">
      <Flex>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormControl isInvalid={errors.dogId}>
            <FormLabel color="white" marginTop="5px" htmlFor="dogId">
              Dog:
            </FormLabel>
            <Input
              value={dogId}
              placeholder=""
              borderColor="#fff"
              id="dogId"
              {...register('dogId')}
              bgColor="#fff"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.dogId && errors.dogId.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl m="15px auto" isInvalid={errors.action}>
            <FormLabel htmlFor="action" color="white">
              Tipo:
            </FormLabel>
            <Select {...register('action')} id="action" bgColor="#fff">
              <option value="1">Vacina</option>
              <option value="2">Vermífugo</option>
              <option value="3">Nutrição</option>
              <option value="4">Medicamento</option>
              <option value="5">Exame</option>
              <option value="6">Alergia</option>
              <option value="7">Doença</option>
              <option value="8">Procedimento</option>
              <option value="9">Outros</option>
            </Select>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.action && errors.action.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.title}>
            <FormLabel color="white" marginTop="5px" htmlFor="title">
              Título:{' '}
            </FormLabel>
            <Input
              placeholder=""
              borderColor="#855050"
              id="title"
              {...register('title')}
              bgColor="#fff"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>

          <FormLabel color="white" marginTop="5px" htmlFor="notes">
            Observação:
          </FormLabel>
          <Input
            as={'textarea'}
            placeholder=""
            {...register('notes')}
            height="80px"
            bgColor="#fff"
          ></Input>

          <FormControl isInvalid={errors.date} mb="20px">
            <FormLabel color="white">Data:</FormLabel>
            <Input
              type="date"
              borderColor="#855050"
              placeholder=""
              {...register('date')}
              bgColor="#fff"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.date && errors.date.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" width="100%" bgColor="#fff">
            Enviar
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
export default FormReport;
