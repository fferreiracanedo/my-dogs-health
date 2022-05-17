import {
  Text,
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';

const FormVacina = () => {
  return (
    <Flex>
      <Box padding="12px 24px">
        <FormControl marginBottom="10px">
          <FormLabel>Nome do Doguinho</FormLabel>
          <Input />
        </FormControl>
        <FormControl marginBottom="10px">
          <FormLabel>Tipo de Ação </FormLabel>
          <Select>
            <option>Vacina</option>
            <option>Medicamento</option>
          </Select>
        </FormControl>
        <FormControl marginBottom="10px">
          <FormLabel>Profissional Responsável</FormLabel>
          <Input />
        </FormControl>
      </Box>
    </Flex>
  );
};

export default FormVacina;
