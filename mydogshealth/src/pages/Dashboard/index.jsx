import { Flex, Box } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import CardSlide from '../../components/CardSlide';

const Dashboard = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100vh">
      <Box>
        <HeaderDashBoard />
      </Box>
      <Box display="flex" flexDir="column">
        <Box marginRight="2%">
          <MenuDashboard />
        </Box>
      </Box>
    </Flex>
  );
};
export default Dashboard;
