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
      width="350px"
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
      <Box paddingRight="1rem">
        <Box
          justifyContent="center"
          color="#ffff"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          display="flex"
        >
          <Text marginRight="120px">Agende sua consulta</Text>
        </Box>
        <Box
          color="#dfcaca"
          fontStyle="normal"
          fontFamily="Inter"
          fontWeight="400"
          height="194px"
          fontSize="0.8rem"
          padding="0.3rem"
          display="flex"
          flexDir="row"
          width="100%"
        >
          <Box>
            <Text fontWeight="500" fontFamily="Poppins" width="140px">
              Clique no botão abaixo e agende sua consulta, um dos nossos
              especialistas irá lhe atender
            </Text>
          </Box>

          <Image
            position="relative"
            left="20px"
            bottom="45px"
            alt=""
            src={Task}
            maxHeight="380px"
          ></Image>
        </Box>
      </Box>

      <Box
        textAlign="end"
        alignItems="flex-end"
        alignSelf="end"
        height="100%"
        display="grid"
        marginRight="2%"
      >
        <Box>
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
            left="170px"
            bottom="355px"
          >
            BUSCAR ESPECIALISTA
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardMarcarConsulta;
