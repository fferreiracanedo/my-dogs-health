import { Flex, Box } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import TableDog from '../../components/TableDog';

const Cuidados = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100vh">
      <Box>
        <HeaderDashBoard />
      </Box>

      <Box display="flex" flexDir="row">
        <Box marginRight="2%">
          <Box>
            <MenuDashboard />
          </Box>
        </Box>
        <TableDog />
      </Box>
    </Flex>
  );
};
export default Cuidados;
