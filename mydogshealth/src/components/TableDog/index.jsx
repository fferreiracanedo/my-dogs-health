import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import FormVacina from '../FormVacina';

const TableDog = () => {
  return (
    <Flex>
      <Box marginTop="10px">
        <Tabs>
          <TabList>
            <Tab>Vacinação</Tab>
            <Tab>Adicionar Vacina</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box>
                <Text>Todas vacinas dos cães</Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <FormVacina />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};
export default TableDog;
