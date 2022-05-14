import { Flex, Box } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import PrincipalSectionDashboard from '../../components/PrincipalSectionDashboard';
const Dashboard = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100vh">
      <Box>
        <HeaderDashBoard />
      </Box>
      <Box display="flex" flexDir="column">
        <Flex marginRight="2%">
          <MenuDashboard />
          <PrincipalSectionDashboard />
        </Flex>
      </Box>
    </Flex>
  );
};
export default Dashboard;
