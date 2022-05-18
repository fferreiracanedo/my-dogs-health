import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import MenuDashboard from '../../components/MenuDashboard';
import HeaderDashBoard from '../../components/HeaderDashBoard';

const DashboardDoctor = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100%" >
      <HeaderDashBoard />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        alignItems={{ base: 'center', md: 'baseline', lg: 'baseline' }}
        justifyContent="space-between"
      >
        <MenuDashboard />
      </Box>
    </Flex>
  );
};
export default DashboardDoctor;
