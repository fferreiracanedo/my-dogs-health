import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import CardMarcarConsulta from '../../components/CardMarcarConsulta';
import CardDashboardAddDog from '../../components/CardDashboardAddDog';
import CardSlide from '../../components/CardSlide';
import FeedDashboard from '../../components/FeedDashboard';
import HeaderMainSection from '../../components/HeaderMainSection';

import DashboardMenu from '../../components/DashboardMenu';
import MenuDashboard from '../../components/MenuDashboard';

import { MdOutlineEditNote, MdHealthAndSafety, MdPets, MdChevronRight, MdCheckCircle } from 'react-icons/md';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Image
} from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <HeaderDashBoard />

      <Breadcrumb m='4' spacing='8px' separator={<MdChevronRight color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='/dashboard/cuidados'>
            Ir para Doguinhos
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        alignItems={{ base: 'center', md: 'baseline', lg: 'baseline' }}
        justifyContent="center"
      >
        <Box
          display="flex"
          width={{ base: '100%', md: '80%', lg: '45%' }}
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >

          
          <Box width="100%" height="80px">
            <HeaderMainSection />
          </Box>


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
