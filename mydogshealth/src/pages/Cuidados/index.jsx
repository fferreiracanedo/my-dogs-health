import { Flex, Box } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import TableDog from '../../components/TableDog';
import { SimpleGrid } from '@chakra-ui/react'

import TableDog2 from '../../components/TableDog2';
const Cuidados = () => {
  return (


    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <HeaderDashBoard />
      <TableDog />
     </Flex>



  );
};
export default Cuidados;
