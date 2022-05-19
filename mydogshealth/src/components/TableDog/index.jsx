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
  LinkBox, LinkOverlay,
  Avatar,
  Badge,
  Stack
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
import { MdOutlineEditNote, MdHealthAndSafety, MdPets, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Image
} from '@chakra-ui/react'

import FormVacina from '../FormVacina';
import DogCard from '../DogCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DogReportCard from '../DogReportCard';
import DogReport from '../DogReport';

const TableDog = () => {
  const dogs = useSelector(state => state.dogs);
  const user = useSelector(state => state.user);
  const { id } = useParams();
  
  const dogPage = dogs.list.find(item=>item.id.toString()===id);

console.log("tabledog", dogPage, id )
  return (
    <Flex maxWidth="800px">


      <Box marginTop="10px">
      <Breadcrumb spacing='8px' separator={<MdChevronRight color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>

    <Menu>
  <MenuButton as={Button} rightIcon={<MdHealthAndSafety />}>
    Home
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src={user.profile.thumb}
        alt={user.profile.name}
        mr='12px'
      />
      <span>Editar Perfil</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/120/120'
        alt='Simon the pensive'
        mr='12px'
      />
      <span>Simon the pensive</span>
    </MenuItem>
  </MenuList>
</Menu>



  </BreadcrumbItem>

  <BreadcrumbItem>
    

  <Menu>
  <MenuButton as={Button} rightIcon={<MdHealthAndSafety />}>
  Doguinhos
  </MenuButton>
  <MenuList>
  <BreadcrumbLink href='/dashboard/cuidados'>

  <MenuItem icon={<MdHealthAndSafety />} command='⌘T'>
      Lista de Doguinhos
    </MenuItem>
    </BreadcrumbLink>
    <MenuDivider />
  {dogs.list.map((item, index)=>

    <MenuItem minH='48px' key={index} color='black'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src={item.thumb}
        alt={item.name}
        mr='12px'
      />
      <span>{item.name} - {item.breed}</span>
    </MenuItem>)}
    <MenuDivider />
    
  <MenuItem icon={<MdPets />} command='⌘T'>
      Adicionar Doguinho
    </MenuItem>
  </MenuList>
</Menu>

  
  </BreadcrumbItem>
  {dogPage 
    && <>
  <BreadcrumbItem isCurrentPage>
  <BreadcrumbLink href={'/dashboard/cuidados/'+ dogPage.id}>{dogPage.name} - {dogPage.breed} </BreadcrumbLink>
  </BreadcrumbItem>
  </>}
</Breadcrumb>

      <Menu>
  <MenuButton as={Button} rightIcon={<MdHealthAndSafety />}  bgColor="#2A4058" color="white">
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Doguinhos</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>



    {dogPage 
    ? <>
    <DogReportCard info={dogPage}/>
    <DogReport info={dogPage}/>

    </>

    : <Flex> {dogs.list.map((item, index)=><LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.id}><DogCard info={item} key={index}/></LinkOverlay></LinkBox>)} </Flex> }



      </Box>
    </Flex>
  );
};
export default TableDog;
