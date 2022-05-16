import { Flex, Box, Text, IconButton } from '@chakra-ui/react';
import { FiHome, FiHelpCircle } from 'react-icons/fi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';

const MenuDashboard = () => {
  return (
    <Flex display={{ base: 'none', md: 'flex' }}>
      <Box width="100%">
        <Box
          height="550px"
          width="132.5px"
          bgColor="#A95757"
          display="flex"
          flexDir="column"
          borderRadius="0px 8px 8px 0px"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          marginTop="20px"
        >
          <Box alignContent="center">
            <Box display="flex" flexDir="column" margin="10px auto">
              <Box marginBottom="35px">
                <IconButton
                  colorScheme=""
                  marginTop="40px"
                  width="100px"
                  icon={<FiHome />}
                ></IconButton>
                <Text
                  color="white"
                  marginTop="10px"
                  left="10%"
                  position="relative"
                  fontWeight="bold"
                >
                  Dashboard
                </Text>
              </Box>

              <Box marginBottom="35px">
                <IconButton
                  colorScheme=""
                  width="100px"
                  icon={<MdOutlineHealthAndSafety />}
                ></IconButton>
                <Text
                  color="white"
                  marginTop="10px"
                  left="25%"
                  position="relative"
                  fontWeight="bold"
                >
                  Saúde
                </Text>
              </Box>

              <Box marginBottom="35px">
                <IconButton
                  width="100px"
                  colorScheme=""
                  icon={<AiOutlineCalendar />}
                ></IconButton>
                <Text
                  color="white"
                  marginTop="10px"
                  left="20%"
                  position="relative"
                  fontWeight="bold"
                >
                  Agenda
                </Text>
              </Box>

              <Box marginBottom="35px">
                <IconButton
                  colorScheme=""
                  width="100px"
                  icon={<BiNews />}
                ></IconButton>
                <Text
                  color="white"
                  marginTop="10px"
                  left="10%"
                  position="relative"
                  fontWeight="bold"
                >
                  Novidades
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default MenuDashboard;
