import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    } from '@chakra-ui/react';
    import { MdOutlineEditNote, MdHealthAndSafety, MdPets } from 'react-icons/md';
    import { useDisclosure } from '@chakra-ui/react';
  import ModalDogAddForm from '../ModalDogAddForm';
import ModalReportAddForm from '../ModalReportAddForm';
  const ModalDogAdd = () => {
      const { isOpen: isOpenModalDogAdd, onOpen: onOpenModalDogAdd, onClose: onCloseModalDogAdd } = useDisclosure();
  
      return (
      <>         
      <Button margin="0 16px" size="60px" padding="0px" backgroundColor="transparent"  onClick={onOpenModalDogAdd}>
          <MdPets size="60px" color="white" />
      </Button>
      <Modal isOpen={isOpenModalDogAdd} onClose={onCloseModalDogAdd}>
          <ModalOverlay />
          <ModalContent width="320px" display="flex" alignItems="center">
              <ModalHeader
                  textAlign="center"
                  fontSize='16px'
              >
                Registrar Doguinho
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>

              <ModalDogAddForm />
              </ModalBody>
          </ModalContent>
      </Modal>
      </>
  );
  };
  export default ModalDogAdd;
    