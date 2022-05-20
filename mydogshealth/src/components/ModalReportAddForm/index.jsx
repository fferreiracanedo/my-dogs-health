import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Form,
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
  } from "@chakra-ui/react";

  import { useState } from 'react';
  import * as yup from 'yup';
  import { useForm } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  
  import { useDispatch } from 'react-redux';
  import { reportRegisterThunk } from '../../store/modules/api/thunks';
  import { useSelector } from 'react-redux';
  
  const ModalReportAddForm = ({dogId, onClose}) => {
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
    const dispatch = useDispatch();
    const onSubmitFunction = data => {
        dispatch(reportRegisterThunk(token, data.dogId, data.action, data.title, data.notes, data.date));
        onClose();
      };
  
    
    return (
      <>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            
          <FormControl isInvalid={errors.dogId}>
              <FormLabel marginTop="5px" htmlFor="dogId">
                Dog:
              </FormLabel>
              <Input
              value={dogId}
                placeholder=""
                borderColor="#2A4058"
                id="dogId"
                {...register('dogId')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.dogId && errors.dogId.message}
              </FormErrorMessage>
            </FormControl>
  
            <FormControl padding="12px" isInvalid={errors.action}>
            <FormLabel htmlFor="action">Tipo:</FormLabel>
            <Select {...register('action')} id="action">
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
              <FormLabel marginTop="5px" htmlFor="title">
              Título:
              </FormLabel>
              <Input
                placeholder=""
                borderColor="#2A4058"
                id="title"
                {...register('title')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>
  
            <FormLabel marginTop="5px" htmlFor="notes">
              Observação:
            </FormLabel>

            <Editable defaultValue='Efeitos e Médico Veterinário responsável.'>
            <EditablePreview borderColor="#2A4058"/>
            <EditableTextarea borderColor="#2A4058"
                as={'textarea'}
                placeholder=""
                {...register('notes')}
                height="80px"
            />
            </Editable>
  
           <FormControl padding="12px" isInvalid={errors.date}>
            <FormLabel>Data:</FormLabel>
            <Input
              type="date"
              borderColor="#2A4058"
              width="100%"
              placeholder=""
              {...register('date')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.date && errors.date.message}
            </FormErrorMessage>
            </FormControl>

            <Button type="submit" width="100%">
              Enviar
            </Button>
          </form>
      </>
    );
  };
  export default ModalReportAddForm;
  