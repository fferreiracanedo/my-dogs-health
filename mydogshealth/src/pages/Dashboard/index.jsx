import { Flex, Box, Text } from '@chakra-ui/react';
import MenuDashboard from '../../components/MenuDashboard';
const Dashboard = () => {
  return (
    <Flex width="100%">
      <Box display="flex" flexDir="column">
        <Box marginRight="2%">
          <MenuDashboard />
        </Box>
      </Box>
    </Flex>
  );
};
export default Dashboard;
