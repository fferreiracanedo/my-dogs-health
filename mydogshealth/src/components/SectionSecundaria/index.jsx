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
          fontWeight="normal"
          textAlign="center"
          fontFamily="Inter"
          marginTop="10px"
        >
          Facilidades da MyDogsHealth
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
            bgColor="#78dcee"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            mb="5px"
            padding="12px 24px"
            border="2px solid #3f7cec"
          >
            <Image alt="Saúde" src={Saude} maxHeight="60px"></Image>
          </Flex>
          <Text padding="12px " fontSize="0.76rem" mb="5px">
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
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            mb="5px"
            padding="12px 24px"
            bgColor="#78dcee"
            border="2px solid #3f7cec"
          >
            <Image alt="Saúde" src={Atendimento} maxHeight="60px"></Image>
          </Flex>
          <Text mt="10px" mb="10px" fontSize="0.76rem">
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
            bgColor="#78dcee"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            border="2px solid #3f7cec"
          >
            <Image alt="Saúde" src={EconomiaTempo} maxHeight="40px"></Image>
          </Flex>
          <Text fontSize="0.76rem" mt="10px" mb="10px">
            Economia de Tempo
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
            bgColor="#78dcee"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            border="2px solid #3f7cec"
          >
            <Image alt="Saúde" src={Foco} maxHeight="40px"></Image>
          </Flex>
          <Text fontSize="0.76rem" mt="10px" mb="10px">
            Foco no Problema
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
            bgColor="#78dcee"
            borderRadius="50px"
            alignItems="center"
            justifyContent="center"
            width="5rem"
            height="5rem"
            border="2px solid #3f7cec"
          >
            <Image alt="Saúde" src={Parceria} maxHeight="40px"></Image>
          </Flex>
          <Text mt="10px" mb="10px" fontSize="0.76rem" textAlign="center">
            Parceria
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SectionSecundaria;
