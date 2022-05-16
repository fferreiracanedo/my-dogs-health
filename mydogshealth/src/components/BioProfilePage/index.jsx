import { Box, Heading, Text } from '@chakra-ui/react';

const BioProfile = () => {
  return (
    <Box
      padding="10px"
      w="288px"
      m="0 auto"
      bgColor="#8E2C2C"
      borderRadius="10px"
      mt="10px"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Heading color="white" fontFamily="Inter" fontSize="28px">
        Sua história
      </Heading>
      <Text fontFamily="Poppins" color="white">
        Que tal nos contar um pouquinho sobre sua paixão por Doguinhos? Edite
        seu campo "Bio" para aparecer aqui
      </Text>
    </Box>
  );
};
export default BioProfile;
