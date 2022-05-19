import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import FormProfile from '../FormProfile';

const UpdateProfile = ({isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="90%" display="flex" alignItems="center">
        <ModalHeader textAlign="center" fontSize={{ base: '16px', md: '18px' }}>
          Atualizar perfil
        </ModalHeader>
        <ModalCloseButton bgColor="#FFFFFF" />
        <ModalBody>
          <FormProfile onClose={onClose} />{' '}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default UpdateProfile;
