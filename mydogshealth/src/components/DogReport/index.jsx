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
    AvatarGroup,
    Badge,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ListItem,
    UnorderedList,
    List, ListIcon
  } from '@chakra-ui/react';
  import { MdOutlineEditNote, MdHealthAndSafety, MdPets, MdCheckCircle } from 'react-icons/md';
  
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  
  import FormVacina from '../FormVacina';
  import DogCard from '../DogCard';
  import { useSelector } from 'react-redux';
  import { useParams } from 'react-router-dom';
  
import DogReportCard from '../DogReportCard';

import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'


  const DogReport = ({info}) => {
    const reports = useSelector(state => state.reports);
  
    return (
      <Flex w="100%" alignItems="center" justifyContent="center">
    <Accordion allowToggle w="100%" maxWidth="800px">
      <Text m="4">Total de Registros: {reports.list.filter(item=>item.dog==info.id).length} </Text>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Vacinas e Vermífugos
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        
<List spacing={3}>
{reports.list.filter(item=>item.action==="1" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Vacina - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="2" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Vermífugo - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>

      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Nutrição, Medicamentos e Alergias
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        
      <List spacing={3}>
{reports.list.filter(item=>item.action==="3" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Nutrição - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="4" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Medicamento - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="6" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Alergia - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>


      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Exames, Doenças e Procedimentos Médicos
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        
      <List spacing={3}>
{reports.list.filter(item=>item.action==="5" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Exame - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>
        
<List spacing={3}>
{reports.list.filter(item=>item.action==="7" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Doença - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="8" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Procedimento - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>


      </AccordionPanel>
    </AccordionItem>
  
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Outros
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        
      <List spacing={3}>
{reports.list.filter(item=>item.action==="9" && item.dog==info.id).map((item, index)=>
  <LinkBox><LinkOverlay href={"/dashboard/cuidados/"+item.dog+"/"+item.id}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Outros - {item.id}
    <Button margin="0 16px" size="32px" padding="0px" backgroundColor="transparent">
      <MdOutlineEditNote size="32px" color="white" />
    </Button>
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>
  </LinkOverlay></LinkBox>
  )}
</List>

     </AccordionPanel>
    </AccordionItem>
  
  </Accordion>
  
      </Flex>
    );
  };
  export default DogReport;
  