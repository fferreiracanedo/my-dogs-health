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

  const DogReport = ({info}) => {
    const reports = useSelector(state => state.reports);
  
    return (
      <Flex>
        <Box marginTop="10px">
  
  <Accordion allowToggle>
  <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
          Ficha {info.id}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
      <UnorderedList>
  <ListItem>{info.name}</ListItem>
  <ListItem>{info.breed} - {info.gender}</ListItem>
  <ListItem>{info.birth}</ListItem>
</UnorderedList>
         
      </AccordionPanel>
    </AccordionItem>
  
  
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
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Vacina - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="2" && item.dog==info.id).map((item, index)=>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Vermífugo - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
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
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Nutrição - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="4" && item.dog==info.id).map((item, index)=>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Medicamento - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="6" && item.dog==info.id).map((item, index)=>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Alergia - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
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
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Exame - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
</List>
        
<List spacing={3}>
{reports.list.filter(item=>item.action==="7" && item.dog==info.id).map((item, index)=>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Doença - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
</List>

<List spacing={3}>
{reports.list.filter(item=>item.action==="8" && item.dog==info.id).map((item, index)=>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Procedimento - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
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
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' /> Outros - {item.id}
    <UnorderedList>
    <ListItem>{item.title} - {item.date}</ListItem>
    <ListItem>{item.notes}</ListItem>
    </UnorderedList>
  </ListItem>)}
</List>


      </AccordionPanel>
    </AccordionItem>
  
  </Accordion>
  
        </Box>
      </Flex>
    );
  };
  export default DogReport;
  