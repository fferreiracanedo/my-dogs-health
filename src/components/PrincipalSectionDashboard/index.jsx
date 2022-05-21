import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Dog from '../../assets/image/DogDashboard.svg';
import Speaker from '../../assets/image/Layer 2.svg';
import cutDog from '../../assets/image/Cute pug is sitting on the sheet.svg';
const PrincipalSectionDashboard = () => {
  return (
    <Box width="62%" margin="50px auto" maxW="590px">
      <Flex width="100%" justifyContent="space-evenly">
        <Heading fontSize={{ base: '16px', md: '26px' }}>
          Bem Vindo , Nome!
        </Heading>
        <Flex>
          <Image
            src={Dog}
            alt="imagem de um cachorro"
            display={{ base: 'none', md: 'block' }}
          />
          <Box>
            <Text>Doguinhos</Text>
            <Text color="red" textAlign="center">
              10
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          bgColor="#AC5858"
          padding="10px"
          borderRadius="10px"
          maxW="276px"
          height="250px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          m={{ base: '10px auto', md: 'auto' }}
        >
          <Heading color="white" fontSize="20px">
            Agende sua consulta
          </Heading>
          <Flex>
            <Text color="white">
              CLique no botão abaixo, e agende sua consulta rapidamente, um dos
              nossos especialistas irá lhe atender
            </Text>
            <Box>
              <Image src={Speaker}></Image>
              <Button colorScheme="#411b1b">+</Button>
            </Box>
          </Flex>
        </Box>
        <Box
          bgColor="#AC5858"
          padding="10px"
          borderRadius="10px"
          maxW="276px"
          height="250px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          m={{ base: '10px auto', md: 'auto' }}
        >
          <Heading color="white" fontSize="20px">
            Adicione um Doguinho
          </Heading>
          <Flex>
            <Text color="white">
              Clicando no botão abaixo você pode adicionar um doguinho,
              facilmente
            </Text>
            <Box>
              <Image src={cutDog} w=""></Image>
              <Button colorScheme="#411b1b">+</Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default PrincipalSectionDashboard;
