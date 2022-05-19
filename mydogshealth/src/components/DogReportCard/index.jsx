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
  } from '@chakra-ui/react';
  import { MdOutlineEditNote, MdHealthAndSafety, MdPets } from 'react-icons/md';
  
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
  import { useDisclosure } from '@chakra-ui/react';
import FormReport from '../FormReport';

  const DogReportCard = ({info}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (

  <Flex alignItems='center'>
    <Avatar size='xl' src={info.thumb} />
    <Box ml='3'>
      <Text fontSize='xl'  fontWeight='bold'>
      {info.name}
        <Badge fontSize='xl' ml='1' colorScheme='green'>
        {info.id}
        </Badge>
      </Text>
      <Text fontSize='xl'>{info.breed}</Text>
      <Text fontSize='xl'>{info.gender}
      <Badge fontSize='xl' ml='1' colorScheme='green'>
        {info.birth}
        </Badge>
    </Text>
    </Box>
    
    <Button margin="2px" padding="0" backgroundColor="transparent">
            <MdOutlineEditNote size="30px" color="#b84040" />
          </Button>
          <Button margin="2px" padding="0" backgroundColor="transparent">
            <MdPets size="30px" color="#b84040" />
          </Button>
          <Button margin="2px" padding="0" backgroundColor="transparent"  onClick={onOpen}
>
            <MdHealthAndSafety size="30px" color="#b84040" />
          </Button>


          <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent width="90%" display="flex" alignItems="center">
            <ModalHeader
              textAlign="center"
              fontSize={{ base: '16px', md: '18px' }}
            >
              Registrar Ação
            </ModalHeader>
            <ModalCloseButton bgColor="#AC5858" />
            <ModalBody>
              <FormReport dogId={info.id} onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>

  </Flex>
    );
  };
  export default DogReportCard;
  