import { Box, Flex } from '@chakra-ui/react';
import FormProfile from '../../components/FormProfile';
import HeaderRegisterFinal from '../../components/HeaderRegisterFinal';
const RegisterFinal = () => {
  return (
    <Flex
      w="90%"
      margin="0 auto"
      height="100%"
      flexDirection="column"
      alignItems="center"
    >
      <HeaderRegisterFinal />
      <Box mt="30px">
        <FormProfile></FormProfile>
      </Box>
    </Flex>
  );
};
export default RegisterFinal;
