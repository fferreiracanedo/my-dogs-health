import { Box, Flex, Text } from '@chakra-ui/react';
import BioProfile from '../../components/BioProfilePage';
import HeaderProfile from '../../components/HeaderProfile';

const Perfil = () => {
  return (
    <Box w="100%" height="100vh">
      <HeaderProfile></HeaderProfile>
      <Flex w="75%">
        <BioProfile />
        <Box bgColor="#fff">
          <Text>Aqui vai um formulario</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Perfil;
