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
  import ModalReportAddForm from '../ModalReportAddForm';
  import { useDisclosure } from '@chakra-ui/react';
import FormReport from '../FormReport';

const ModalReportAdd = ({info}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    <>         
    <Button margin="0 16px" size="60px" padding="0px" backgroundColor="transparent"  onClick={onOpen}>
        <MdHealthAndSafety size="60px" color="white" />
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="320px" display="flex" alignItems="center">
            <ModalHeader
                textAlign="center"
                fontSize='16px'
            >
                Registrar Ação
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <ModalReportAddForm dogId={info && info.id} onClose={onClose} />
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
);
};
export default ModalReportAdd;
  