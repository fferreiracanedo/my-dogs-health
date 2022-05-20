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
  
  const TableReports = () => {
    const dogs = useSelector(state => state.dogs);
    const reports = useSelector(state => state.reports);
    const user = useSelector(state => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { id, act } = useParams();
    const dogPage = dogs.list && dogs.list.find(item => item.id.toString() === id);
    const reportPage = reports.list && reports.list.find(item => item.id.toString() === act);
  
    return (
  
  <Box w="100%">
  
  
    <Breadcrumb spacing='8px' m='4' separator={<MdChevronRight color='gray.500' />}>
      <BreadcrumbItem>
        <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>
      </BreadcrumbItem>
    <BreadcrumbItem>
    <BreadcrumbLink href='/dashboard/cuidados'>
        Doguinhos
      </BreadcrumbLink>
    </BreadcrumbItem>
    {dogPage 
      && 
    <BreadcrumbItem >
    <BreadcrumbLink href={'/dashboard/cuidados/'+ dogPage.id}>{dogPage.name} - {dogPage.breed} </BreadcrumbLink>
    </BreadcrumbItem>
    }
  
    {reportPage 
      && 
    <BreadcrumbItem >
    <BreadcrumbLink href={'/dashboard/cuidados/'+ dogPage.id+"/"+reportPage.id}>Ação {reportPage.id} </BreadcrumbLink>
    </BreadcrumbItem>
    }
  
  </Breadcrumb>
  
      <DogReportCard info={dogPage}/>
  
  </Box>
    );
  };
  export default TableReports;
  