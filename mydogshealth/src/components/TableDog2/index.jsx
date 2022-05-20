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
    Heading
  } from '@chakra-ui/react';
  
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { MdOutlineEditNote, MdHealthAndSafety, MdPets, MdChevronRight, MdCheckCircle } from 'react-icons/md';
  import { Link } from 'react-router-dom';
  
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
  
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Image
  } from '@chakra-ui/react';
  import { Grid, GridItem } from '@chakra-ui/react';
  import { Wrap, WrapItem, Center } from '@chakra-ui/react'
  import FormVacina from '../FormVacina';
  import DogCard from '../DogCard';
  import { useSelector } from 'react-redux';
  import { useParams } from 'react-router-dom';
  import DogReportCard from '../DogReportCard';
  import DogReport from '../DogReport';
  import { SimpleGrid } from '@chakra-ui/react'
  import DogRegisterForm from '../dogRegisterForm';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
  import ModalReportAdd from '../ModalReportAdd';
  import ModalDogAdd from '../ModalDogAdd';

  import TableCards from '../TableCards';

  const TableDog2 = () => {
    const dogs = useSelector(state => state.dogs);
    const reports = useSelector(state => state.reports);
    const user = useSelector(state => state.user);
    const { id, act } = useParams();
    const dogPage = dogs.list && dogs.list.find(item => item.id.toString() === id);
    const reportPage = reports.list && reports.list.find(item => item.id.toString() === act);
  


    return (
  
        <Center>
            <ModalDogAdd/>
      <TableCards/>  
        </Center>
  
       
        );
  };
  export default TableDog2;
  