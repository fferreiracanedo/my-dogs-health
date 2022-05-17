import {
  Image,
  Box,
  Flex,
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from '@chakra-ui/react';

import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsCalendarPlus } from 'react-icons/bs';

import Task from '../../assets/image/task.svg';
const CardMarcarConsulta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      m="2%"
      width={{base:"100%", md:"45%"}}
      height="200px"
      backgroundColor="#AC5858"
      padding="1rem"
      borderRadius="8px"
      justifyContent="center"
    >
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">Falar com Especialista</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                display="flex"
                bgColor="#c07b7b"
                width="100%"
                marginBottom="5px"
              >
                <Box>
                  <Text color="#fff" fontFamily="Inter">
                    Junior Carlos
                  </Text>
                  <Text color="#4d4848" fontFamily="Poppins" as="span">
                    Especialista Veterinário
                  </Text>
                </Box>

                <Box padding="12px 24px" display="flex">
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<FaWhatsapp />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<AiOutlineLinkedin />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    icon={<BsCalendarPlus />}
                  ></IconButton>
                </Box>
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                display="flex"
                bgColor="#c07b7b"
                width="100%"
                marginBottom="5px"
              >
                <Box>
                  <Text color="#fff" fontFamily="Inter">
                    Junior Carlos
                  </Text>
                  <Text color="#4d4848" fontFamily="Poppins" as="span">
                    Especialista Veterinário
                  </Text>
                </Box>

                <Box padding="12px 24px" display="flex">
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<FaWhatsapp />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<AiOutlineLinkedin />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    icon={<BsCalendarPlus />}
                  ></IconButton>
                </Box>
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                display="flex"
                bgColor="#c07b7b"
                width="100%"
                marginBottom="5px"
              >
                <Box>
                  <Text color="#fff" fontFamily="Inter">
                    Junior Carlos
                  </Text>
                  <Text color="#4d4848" fontFamily="Poppins" as="span">
                    Especialista Veterinário
                  </Text>
                </Box>

                <Box padding="12px 24px" display="flex">
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<FaWhatsapp />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<AiOutlineLinkedin />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    icon={<BsCalendarPlus />}
                  ></IconButton>
                </Box>
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                display="flex"
                bgColor="#c07b7b"
                width="100%"
                marginBottom="5px"
              >
                <Box>
                  <Text color="#fff" fontFamily="Inter">
                    Junior Carlos
                  </Text>
                  <Text color="#4d4848" fontFamily="Poppins" as="span">
                    Especialista Veterinário
                  </Text>
                </Box>

                <Box padding="12px 24px" display="flex">
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<FaWhatsapp />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<AiOutlineLinkedin />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    icon={<BsCalendarPlus />}
                  ></IconButton>
                </Box>
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                display="flex"
                bgColor="#c07b7b"
                width="100%"
              >
                <Box>
                  <Text color="#fff" fontFamily="Inter">
                    Junior Carlos
                  </Text>
                  <Text color="#4d4848" fontFamily="Poppins" as="span">
                    Especialista Veterinário
                  </Text>
                </Box>

                <Box padding="12px 24px" display="flex">
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<FaWhatsapp />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    marginRight="10px"
                    icon={<AiOutlineLinkedin />}
                  ></IconButton>
                  <IconButton
                    bgColor="#c07b7b"
                    icon={<BsCalendarPlus />}
                  ></IconButton>
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} variant="ghost">
                Cancelar Operação
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

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
          Agende uma consulta
        </Box>
        <Box
          width="100%"
          maxWidth="300px"
          color="#ffffff"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize={{ base: '14px', md: '12px', lg: '12px', xl: '14px' }}
          overflow="hidden"
          textOverflow="ellipsis"
          padding="5px"
        >
          Clique no botão abaixo e agende sua consulta!
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box width="100%" maxWidth="250px" maxHeight="250px">
          <Image
            width="100%"
            maxWidth="250px"
            alt="uma folha de caderno ao centro e 1 pessoal ao lado"
            src={Task}
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
            
          >
            <Text margin="5px 5px 6px 5px">+</Text>
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardMarcarConsulta;


