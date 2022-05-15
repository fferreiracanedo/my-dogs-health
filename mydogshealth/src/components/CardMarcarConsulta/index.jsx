import { Image, Box, Flex, Button, Text } from '@chakra-ui/react';
import LogoConsulta from '../../assets/image/AvatarConsulta.svg';
import Task from '../../assets/image/task.svg';
const CardMarcarConsulta = () => {
  return (
    <Flex
      width="350px"
      height="200px"
      backgroundColor="#AC5858"
      padding="1rem"
      borderRadius="8px"
      justifyContent="center"
    >
      <Box paddingRight="1rem">
        <Box
          justifyContent="center"
          color="#ffff"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          display="flex"
        >
          <Text marginRight="120px">Agende sua consulta</Text>
        </Box>
        <Box
          color="#dfcaca"
          fontStyle="normal"
          fontFamily="Inter"
          fontWeight="400"
          height="194px"
          fontSize="0.8rem"
          padding="0.3rem"
          display="flex"
          flexDir="row"
          width="100%"
        >
          <Box>
            <Text fontWeight="500" fontFamily="Poppins" width="140px">
              Clique no botão abaixo e agende sua consulta, um dos nossos
              especialistas irá lhe atender
            </Text>
          </Box>

          <Image
            position="relative"
            left="20px"
            bottom="45px"
            alt=""
            src={Task}
            maxHeight="380px"
          ></Image>
        </Box>
      </Box>

      <Box
        textAlign="end"
        alignItems="flex-end"
        alignSelf="end"
        height="100%"
        display="grid"
        marginRight="2%"
      >
        <Box>
          <Button
            backgroundColor="#792323"
            color="#fff"
            size="xs"
            onClick={() => console.log(12)}
            fontWeight="bold"
            fontSize="11px"
            padding="12px 24px"
            marginTop="0.5rem"
            position="absolute"
            left="170px"
            bottom="355px"
          >
            AGENDAR
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardMarcarConsulta;
