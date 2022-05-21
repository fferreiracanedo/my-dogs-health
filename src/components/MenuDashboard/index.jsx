import { Flex, Box, Text, IconButton } from '@chakra-ui/react';
import { FiHome, FiHelpCircle } from 'react-icons/fi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

const MenuDashboard = () => {
  const history = useHistory();
  return (
    <Flex display={{ base: 'none', md: 'flex' }}>
      <Box width="100%">
        <Box
          height="550px"
          width="130px"
          bgColor="#FFF"
          display="flex"
          flexDir="column"
          borderRadius="0px 8px 8px 0px"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          marginTop="20px"
        >
          <Box alignContent="center">
            <Box display="flex" flexDir="column"  alignItems="center">
              <Box marginBottom="35px">
                <IconButton
                  colorScheme=""
                  color="#262262"
                  fontSize="24px"
                  marginTop="40px"
                  margin="0 auto"
                  width="100%"
                  onClick={() => history.push('/dashboard')}
                  icon={<FiHome />}
                ></IconButton>
                
                <Text
                  color="#262262"
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
                  color="#262262"
                  fontSize="24px"
                  marginTop="40px"
                  margin="0 auto"
                  width="100%"
                  icon={<MdOutlineHealthAndSafety />}
                  onClick={() => history.push('/dashboard/cuidados')}
                ></IconButton>
                <Text
                  color="#262262"
                  marginTop="10px"
                  // left="25%"
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
                  color="#262262"
                  fontSize="24px"
                  marginTop="40px"
                  margin="0 auto"
                  
                  icon={<AiOutlineCalendar />}
                ></IconButton>
                <Text
                  color="#262262"
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
                  color="#262262"
                  fontSize="24px"
                  marginTop="40px"
                  margin="0 auto"
                  width="100%"
                  icon={<BiNews />}
                ></IconButton>
                <Text
                  color="#262262"
                  marginTop="10px"
                  // left="10%"
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
