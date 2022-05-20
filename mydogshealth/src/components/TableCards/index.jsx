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
  
  const TableCards = () => {
    const dogs = useSelector(state => state.dogs);
    const reports = useSelector(state => state.reports);
    const user = useSelector(state => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure()
  
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
        </Breadcrumb>

      <Wrap w="100%" alignItems="center" justifyContent="center"> 
  
        <WrapItem>
      <Flex
        backgroundColor="#FFFF"
        width="300px"
        height="400px"
        flexDirection="column"
        alignItems="center"
        marginTop="20px"
        borderRadius="5px"
        border="solid 2px"
        boxShadow="0 3px 2px 2px #333333"
        mr="20px"
      >
  
  <Flex width="100%" justifyContent="space-around">
          <Button
            margin="2px"
            padding="0"
            backgroundColor="transparent"
            cursor="auto"
          >
            <MdPets size="30px" color="#2A4058" />
          </Button>
        </Flex>
  
  
        <Button
              display="flex"
              alignItems="center"
              textAlign="center"
              backgroundColor="#b8b3b3"
              color="#000"
              size="xs"
              onClick={onOpen}
              fontWeight="bold"
              fontSize={{ base: '10px', md: '12px', lg: '18px' }}
              marginBottom="5px"
            >
              <Text margin="5px 5px 6px 5px">+</Text>
            </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent width="90%" display="flex" alignItems="center">
              <ModalHeader
                textAlign="center"
                fontSize={{ base: '16px', md: '18px' }}
              >
                Registrar um Novo Cão
              </ModalHeader>
              <ModalCloseButton bgColor="#AC5858" />
              <ModalBody>
                <DogRegisterForm onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
  
  
  
      </Flex>
  
      </WrapItem>
      {dogs.list && dogs.list.map((item, index)=><WrapItem key={index}>
          <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.id}>
              <DogCard info={item}/></LinkOverlay></LinkBox>
              </WrapItem>)}
      </Wrap> 
      
  </Box>
  
    );
  };
  export default TableCards;
  