import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import CardMarcarConsulta from '../../components/CardMarcarConsulta';
import CardDashboardAddDog from '../../components/CardDashboardAddDog';
import CardSlide from '../../components/CardSlide';
import FeedDashboard from '../../components/FeedDashboard';
const Dashboard = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100vh">
      <HeaderDashBoard />

      <Box display="flex" flexDir="column">
        <Box marginRight="2%">
          <Box display="flex" flexDir="row">
            <MenuDashboard />
            <Box
              display="flex"
              flexDir={{ base: 'column', sm: 'row' }}
              margin="10px"
            >
              <Box display="flex">
                <Box margin="12px">
                  <CardMarcarConsulta />
                </Box>
                <Box>
                  <CardDashboardAddDog />
                  <Box marginTop="20px" marginLeft="-360px">
                    <CardSlide />
                  </Box>
                </Box>

                <Box padding="12px 24px" marginTop="5px" marginLeft="20px">
                  <FeedDashboard />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default Dashboard;
