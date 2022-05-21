import { Box, Flex } from '@chakra-ui/react';
import BioProfile from '../../components/BioProfilePage';
import FormProfilePage from '../../components/FormProfilePage';
import HeaderProfile from '../../components/HeaderProfile';

const Perfil = () => {
  return (
    <Box w="100%" height="100%">
      <HeaderProfile></HeaderProfile>
      <Flex
        w="75%"
        margin="0 auto"
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <BioProfile />
        <FormProfilePage />
      </Flex>
    </Box>
  );
};

export default Perfil;
