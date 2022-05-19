import { Box, Flex } from '@chakra-ui/react';
import FormProfile from '../../components/FormProfile';
import HeaderRegisterFinal from '../../components/HeaderRegisterFinal';
const RegisterFinal = () => {
  return (
    <Flex
      w="90%"
      margin="0 auto"
      height="100vh"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-around"
      alignItems="center"
    >
      <HeaderRegisterFinal />

      <FormProfile></FormProfile>
    </Flex>
  );
};
export default RegisterFinal;
