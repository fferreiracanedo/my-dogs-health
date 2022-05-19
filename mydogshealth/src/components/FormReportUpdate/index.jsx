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
  } from "@chakra-ui/react";

  import { useState } from 'react';
  import * as yup from 'yup';
  import { useForm } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  
  import { useDispatch } from 'react-redux';
  import { reportUpdateThunk } from '../../store/modules/api/thunks';
  import { useSelector } from 'react-redux';
  
  const FormReportUpdate = ({reportId, notes}) => {
    const loginSchema = yup.object().shape({
        reportId: yup.string(),
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
      console.log("formReport",token, data.notes);
        dispatch(reportUpdateThunk(token, data.reportId, data.notes));
      };
  
    
    return (
      <Box bgColor="#8E2C2C" padding="20px" borderRadius="15px">
        <Flex>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            
          <FormControl isInvalid={errors.dogId}>
              <FormLabel color="white" marginTop="5px" htmlFor="reportId">
                Registro:{' '}
              </FormLabel>
              <Input
              value={reportId}
                placeholder=""
                borderColor="#855050"
                id="reportId"
                {...register('reportId')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.reportId && errors.reportId.message}
              </FormErrorMessage>
            </FormControl>
  
            <FormLabel color="white" marginTop="5px" htmlFor="notes">
              Observação:
            </FormLabel>

            <Editable defaultValue={notes}>
            <EditablePreview />
            <EditableTextarea
                as={'textarea'}
                placeholder=""
                {...register('notes')}
                height="80px"
            />
            </Editable>

            <Button type="submit" width="100%" bgColor="#FED7D7">
              Enviar
            </Button>
          </form>
        </Flex>
      </Box>
    );
  };
  export default FormReportUpdate;
  