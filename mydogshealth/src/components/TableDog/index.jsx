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
  LinkBox,
  LinkOverlay,
  Avatar,
  Badge,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { MdOutlineEditNote, MdHealthAndSafety, MdPets } from 'react-icons/md';

import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import FormVacina from '../FormVacina';
import DogCard from '../DogCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DogReportCard from '../DogReportCard';
import DogReport from '../DogReport';

const TableDog = () => {
  const dogs = useSelector(state => state.dogs);
  console.log(dogs.list);
  const { id } = useParams();

  const dogPage = dogs.list.find(item => item.id.toString() === id);

  return (
    <Flex>
      <Box marginTop="10px">
        {dogPage ? (
          <>
            <DogReportCard info={dogPage} />
            <DogReport info={dogPage} />
          </>
        ) : (
          <Flex flexWrap="wrap">
            {dogs.list.map((item, index) => (
              <LinkBox>
                <LinkOverlay href={'/dashboard/cuidados/' + item.id}>
                  <DogCard info={item} key={index} />
                </LinkOverlay>
              </LinkBox>
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
export default TableDog;
