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
  import DogUpdateForm from '../DogUpdateForm';
  import FormVacina from '../FormVacina';
  import DogCard from '../DogCard';
  import { useSelector } from 'react-redux';
  import { useParams } from 'react-router-dom';
  import { useDisclosure } from '@chakra-ui/react';
import FormReport from '../FormReport';

  const DogReportCard = ({info}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDogEdit, onOpen: onOpenDogEdit, onClose: onCloseDogEdit } = useDisclosure()

    return (

  <Flex  w="100%" alignItems="center" justifyContent="center">

    <Button  margin="0 16px" size="60px" padding="0px"  backgroundColor="transparent" onClick={onOpenDogEdit}>
      <MdOutlineEditNote size="60px" color="white" />
    </Button>



    <Modal isOpen={isOpenDogEdit} onClose={onCloseDogEdit}>
          <ModalOverlay />
          <ModalContent  display="flex" alignItems="center">
            <ModalHeader
              textAlign="center"
              fontSize={{ base: '16px', md: '16px' }}
            >
              Atualizar Informações
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <DogUpdateForm dogdata={info} onClose={onCloseDogEdit} />
            </ModalBody>
          </ModalContent>
        </Modal>


    <Avatar size='2xl' src={info.thumb} />
    <Box ml='3'>
      <Text fontSize='xl'  fontWeight='bold'>
      {info.name} ({info.gender})
      </Text>
      <Text fontSize='xl'>{info.breed}</Text>
      <Text fontSize='xl'>{info.birth}
    </Text>
    <Badge fontSize='xl' ml='1' colorScheme='green'>
        {info.id}
        </Badge>
    </Box>
    
          
          <Button margin="0 16px" size="60px" padding="0px" backgroundColor="transparent"  onClick={onOpen}
>           <MdHealthAndSafety size="60px" color="white" />
          </Button>


          <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  display="flex" alignItems="center">
            <ModalHeader
              textAlign="center"
              fontSize='16px'
            >
              Registrar Ação
            </ModalHeader>
            <ModalCloseButton  />
            <ModalBody>
              <FormReport dogId={info.id} onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>

  </Flex>
    );
  };
  export default DogReportCard;
  