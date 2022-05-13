import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Atendimento from '../../assets/image/Atendimento.svg';
import Saude from '../../assets/image/Saude.svg';
import Parceria from '../../assets/image/Parceria.svg';
import Foco from '../../assets/image/Foco.svg';
import EconomiaTempo from '../../assets/image/EconomiaTempo.svg';
const SectionSecundaria = () => {
  return (
    <Box width="90%" m="0 auto">
      <Box marginBottom="10px">
        <Heading
          fontSize="20px"
          color="#319795"
          fontWeight="regular"
          textAlign="center"
        >
          Facilidades da Dogs Health
        </Heading>
      </Box>
      <Flex
        flexBasis="1"
        flexDirection={{ base: 'column', md: 'row' }}
        maxWidth="1024px"
        margin="0 auto"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="7rem"
        >
          <Flex
            p="10px"
            bgColor="#C4C4C4"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            mb="5px"
          >
            <Image alt="Saúde" src={Saude} maxHeight="60px"></Image>
          </Flex>
          <Text fontSize="0.76rem" mb="5px">
            Saúde Canina
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="7rem"
        >
          <Flex
            p="7px"
            bgColor="#C4C4C4"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            mb="5px"
          >
            <Image alt="Saúde" src={Atendimento} maxHeight="60px"></Image>
          </Flex>
          <Text mb="5px" fontSize="0.76rem">
            Atendimento online
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="7rem"
        >
          <Flex
            p="7px"
            bgColor="#C4C4C4"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
          >
            <Image alt="Saúde" src={EconomiaTempo} maxHeight="40px"></Image>
          </Flex>
          <Text fontSize="0.76rem">Economia de Tempo</Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="7rem"
        >
          <Flex
            p="7px"
            bgColor="#C4C4C4"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
          >
            <Image alt="Saúde" src={Foco} maxHeight="40px"></Image>
          </Flex>
          <Text fontSize="0.76rem">Foco no Problema</Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="7rem"
        >
          <Flex
            p="7px"
            bgColor="#C4C4C4"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
          >
            <Image alt="Saúde" src={Parceria} maxHeight="40px"></Image>
          </Flex>
          <Text fontSize="0.76rem" textAlign="center">
            Parceria Comunitária
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default SectionSecundaria;
