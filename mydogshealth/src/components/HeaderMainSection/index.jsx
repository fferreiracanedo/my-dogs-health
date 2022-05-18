import { Box, Flex, Image, Text } from '@chakra-ui/react';
import dogMainSection from '../../assets/image/dogMainSection.svg';

const HeaderMainSection = () => {
  return (
    <Flex
      display="flex"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
    >
      <Box display="flex">
        <Text
          fontSize={{ base: '14px', md: '14px', lg: '18px' }}
          padding="5px"
          marginLeft="10px"
          fontFamily="Inter"
        >
          Bem vindo, Alfredo
        </Text>
      </Box>
      <Box display="flex" alignItems="center" marginRight="10px">
        <Image
          margin="2%"
          width="100%"
          height="100%"
          maxHeight="70px"
          src={dogMainSection}
        />
        <Text
          fontSize={{ base: '14px', md: '14px', lg: '18px' }}
          padding="5px"
          fontFamily="Inter"
        >
          Doguinhos, 10
        </Text>
      </Box>
    </Flex>
  );
};
export default HeaderMainSection;
