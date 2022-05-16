import {
  Image,
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
import { useDisclosure } from '@chakra-ui/react';

import LogoDog from '../../assets/image/dog.svg';

const CardDashboardAddDog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      marginTop="12px"
      backgroundColor="#AC5858"
      padding="1rem"
      borderRadius="8px"
      width="350px"
      height="200px"
      justifyContent="center"
      alignContent="center"
    >
      <Box paddingRight="1rem">
        <Box
          color="#ffffff"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          marginLeft="5px"
        >
          Adicione um Doguinho
        </Box>
        <Box
          color="#ffffff"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize="0.8rem"
          padding="0.3rem"
        >
          Clicando no botão abaixo, você pode adicionar um novo doguinho,
          facilmente
        </Box>
      </Box>
      <Box textAlign="end" alignItems="flex-end" alignSelf="end">
        <Box>
          <Image
            width="300px"
            alt="Saúde"
            src={LogoDog}
            maxHeight="40px"
          ></Image>
        </Box>

        <Button
          backgroundColor="#792323"
          color="#fff"
          size="xs"
          onClick={onOpen}
          fontWeight="bold"
          fontSize="11px"
          padding="12px 24px"
          marginTop="0.5rem"
          position="absolute"
          left="540px"
          bottom="355px"
        >
          ADICIONAR
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Registrar um novo Cão</ModalHeader>
            <ModalCloseButton />
            <ModalBody>dasdas</ModalBody>
            <ModalFooter>
              <Button variant="ghost">Cadastrar</Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default CardDashboardAddDog;
