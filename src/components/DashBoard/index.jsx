import { Box, Button, Flex, Text } from '@chakra-ui/react';

const DashBoard = () => {
  return (
    <Flex>
      <Box display="flex">
        <Box
          bgColor="#EEC0C0"
          display="flex"
          flexDirection="column"
          w={{ base: '35vw', md: '25vw', lg: '20vw' }}
        >
          <Box margin="2%" display="flex" justifyContent="center">
            <Text
              fontSize={{ base: '16px', md: '18px', lg: '22px' }}
              fontWeight="700"
            >
              My Dogs
              <Text
                fontSize={{ base: '16px', md: '18px', lg: '22px' }}
                color="#319795"
                fontWeight="700"
              >
                Health
              </Text>
            </Text>
          </Box>
          <Text
            fontWeight="700"
            m="10px"
            fontSize={{ base: '12px', md: '18px', lg: '22px' }}
          >
            Informações
          </Text>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '14px', lg: '16px' }}
              bgColor="#C4C4C4"
            >
              Registro de cão
            </Button>
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '14px', lg: '16px' }}
              bgColor="#C4C4C4"
            >
              Controle Vacinal
            </Button>
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '14px', lg: '16px' }}
              bgColor="#C4C4C4"
            >
              Registrar vacina
            </Button>
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '14px', lg: '15px' }}
              bgColor="#C4C4C4"
            >
              Profissionais Online
            </Button>
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '14px', lg: '16px' }}
              bgColor="#C4C4C4"
            >
              Adicionar cão
            </Button>
          </Box>
          <Text
            fontWeight="700"
            m="10px"
            fontSize={{ base: '14px', md: '18px', lg: '22px' }}
          >
            Ajuda
          </Text>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '16px', lg: '18px' }}
              bgColor="#C4C4C4"
            >
              Suporte
            </Button>
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '16px', lg: '18px' }}
              bgColor="#C4C4C4"
            >
              FAQ
            </Button>
            <Button
              h="25px"
              w="70%"
              m="10px"
              fontSize={{ base: '10px', md: '16px', lg: '18px' }}
              bgColor="#C4C4C4"
            >
              Mandar E-mail
            </Button>
          </Box>
        </Box>
        <Box
          bgColor="#FED7D7"
          w="65vw"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            w="100%"
            margin="2%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Text textAlign="center">Olá, Tobby</Text>
            <Box display="flex">
              <Button h="25px" bgColor="#319795">
                Sair
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgColor="#EEC0C0"
            w="80%"
            h="50%"
            m="15px"
            borderRadius="10px"
          >
            <Text m="2%">Tobby Gonçalves</Text>
            <Box display="flex" flexDirection="column" w="100%">
              <Box>
                <Text m="1% 1% 1% 10%">Raça</Text>
                <Text
                  textAlign="center"
                  w="80%"
                  bgColor="#644D4D"
                  color="#FFFFFF"
                  marginLeft="10%"
                  borderRadius="5px"
                >
                  Border Collier
                </Text>
              </Box>
              <Box>
                <Text m="1% 1% 1% 10%">Idade</Text>
                <Text
                  textAlign="center"
                  w="80%"
                  bgColor="#644D4D"
                  color="#FFFFFF"
                  marginLeft="10%"
                  borderRadius="5px"
                >
                  3 Anos
                </Text>
              </Box>
              <Box>
                <Text m="1% 1% 1% 10%">Sistema Vacional</Text>
                <Text
                  textAlign="center"
                  w="80%"
                  bgColor="#644D4D"
                  color="#FFFFFF"
                  marginLeft="10%"
                  borderRadius="5px"
                >
                  Em dia
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default DashBoard;
