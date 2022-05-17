import { Flex, Text } from '@chakra-ui/react';
import Logo from '../../components/Logo';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';

const Contact = () => {
  return (
    <Flex minHeight="100vh" width="100vw" flexDirection="column">
      <Flex
        width="100%"
        height="50vh"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor=""
      >
        <Logo width={{ base: '290px', md: '350px', lg: '500px' }} />
        <Text
          fontWeight="600"
          fontSize={{ base: '24px', md: '32px', lg: '40px' }}
          textAlign="center"
        >
          Escolha a melhor forma de contato
        </Text>
      </Flex>
      <Flex
        backgroundColor="#fff"
        width="100vw"
        minHeight="50vh"
        alignItems="center"
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex marginTop="30px" flexDirection="column" alignItems="center">
          <AiOutlineMail size="70px" />
          <Text
            marginBlock="5px"
            color="#792323"
            fontWeight="800"
            fontSize="32px"
          >
            E-mail
          </Text>
          <Text marginBlock="5px" fontWeight="600">
            Tire suas duvidas.
          </Text>
          <Text marginBlock="5px" color="#792323" fontWeight="600">
            ajuda@mydogshelth.com
          </Text>
        </Flex>
        <Flex marginTop="30px" flexDirection="column" alignItems="center">
          <AiOutlinePhone size="70px" />
          <Text
            marginBlock="5px"
            color="#792323"
            fontWeight="800"
            fontSize="32px"
          >
            Telefone
          </Text>
          <Text marginBlock="5px" fontWeight="600">
            Ligue a qualquer hora.
          </Text>
          <Text marginBlock="5px" color="#792323" fontWeight="600">
            +55 (41) 99999-9999
          </Text>
        </Flex>
        <Flex
          marginTop="30px"
          marginBottom={{ base: '30px', md: '0' }}
          flexDirection="column"
          alignItems="center"
        >
          <BsChat size="70px" />
          <Text
            marginBlock="5px"
            color="#792323"
            fontWeight="800"
            fontSize="32px"
          >
            Chat
          </Text>
          <Text marginBlock="5px" fontWeight="600">
            Para atendimento imediato.
          </Text>
          <Text marginBlock="5px" color="#792323" fontWeight="600">
            Abra nosso chat online.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
