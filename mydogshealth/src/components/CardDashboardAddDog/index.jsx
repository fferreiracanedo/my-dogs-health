import {
  Image,
  Text,
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import DogRegisterForm from '../dogRegisterForm';
import { useDisclosure } from '@chakra-ui/react';

import LogoDog from '../../assets/image/dog.svg';

const CardDashboardAddDog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      m="2%"
      backgroundColor="#AC5858"
      padding="1rem"
      borderRadius="8px"
      width={{ base: '100%', md: '45%' }}
      height="200px"
      justifyContent="center"
      alignContent="center"
    >
      <Box width="100%">
        <Box
          width="100%"
          fontSize={{ base: '18px', md: '14px', lg: '16px', xl: '20px' }}
          color="#ffffff"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          marginLeft="5px"
        >
          Adicione um Doguinho
        </Box>
        <Box
          width="100%"
          maxWidth="300px"
          color="#ffffff"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize={{ base: '14px', md: '12px', lg: '12px', xl: '14px' }}
          padding="5px"
        >
          Clicando no botão, você pode adicionar um novo doguinho!
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          width="100%"
          maxWidth="250px"
          maxHeight="200px"
          justifyContent={{
            base: 'center',
            md: 'space-between',
            lg: 'space-between',
          }}
        >
          <Image
            width="100%"
            maxWidth="250px"
            marginTop="20px"
            alt="imagem de um cachorrinho fazendo alongamento de ioga"
            src={LogoDog}
            height="100%"
            maxHeight="250px"
          ></Image>
        </Box>
        <Box display="flex">
          <Button
            display="flex"
            alignItems="center"
            textAlign="center"
            backgroundColor="#792323"
            color="#fff"
            size="xs"
            onClick={onOpen}
            fontWeight="bold"
            fontSize={{ base: '10px', md: '12px', lg: '18px' }}
            marginBottom="5px"
          >
            <Text margin="5px 5px 6px 5px">+</Text>
          </Button>
        </Box>
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
      </Box>
    </Flex>
  );
};

export default CardDashboardAddDog;
