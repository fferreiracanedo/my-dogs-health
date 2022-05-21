import { Avatar, Flex, Box, Text, Button } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';

const HeaderPerfil = () => {
  return (
    <Flex>
      <Box
        maxWidth="1024px"
        padding="12px 24px"
        marginTop="10px"
        display="flex"
        flexDir="row"
      >
        <Avatar
          height="100px"
          width="100px"
          name="Ricardo Magalhaes"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
        ></Avatar>

        <Box marginTop="5%" marginLeft="2%">
          <Text fontFamily="Inter">Ricardo Magalhaes</Text>
          <Text fontFamily="Poppins" color="#e96565">
            Engenheiro de Software
          </Text>

          <Box marginTop="5px" display="flex" flexDir="row">
            <GoLocation />
            <Text marginLeft="10px" color="gray" fontWeight="500">
              Porto Alegre,RS
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default HeaderPerfil;
