import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import CardMarcarConsulta from '../../components/CardMarcarConsulta';
import CardDashboardAddDog from '../../components/CardDashboardAddDog';
import CardSlide from '../../components/CardSlide';
import FeedDashboard from '../../components/FeedDashboard';

const Dashboard = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100%">
      <HeaderDashBoard />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        alignItems={{ base: 'center', md: 'baseline', lg: 'baseline' }}
        justifyContent="space-between"
      >
        <MenuDashboard />

        <Box
          display="flex"
          width={{ base: '100%', md: '80%', lg: '45%' }}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <CardMarcarConsulta />
          <CardDashboardAddDog />
          <Box width="100%" margin="3%">
            <CardSlide />
          </Box>
        </Box>
        <Box width={{ base: '90%', md: '30%', lg: '30%' }} margin="1%">
          <FeedDashboard />
        </Box>
      </Box>
    </Flex>
  );
};
export default Dashboard;
