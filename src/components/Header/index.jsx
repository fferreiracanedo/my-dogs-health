import { Flex, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const history = useHistory();
  return (
    <Flex
      height="100px"
      alignItems="center"
      padding="10px"
      width="100vw"
      maxWidth="1024px"
      margin="0 auto"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      marginTop={{ base: '25px', md: '0' }}
    >
      <Logo width="200px" />
      <Flex
        width="100%"
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        alignItems="center"
        marginTop={{ base: '15px', md: '0' }}
      >
        <Flex
          color="#1B1616"
          alignItems="center"
          fontSize="16px"
          justifyContent="space-around"
          width="100%"
          marginTop={{ base: '15px', md: '0' }}
        >
          <Text
            marginTop="5px"
            color="white"
            paddingBottom="5px"
            transition="0.4s"
            borderBottom="2px solid #FED7D7"
            _hover={{
              borderBottom: '2px solid black',
            }}
          >
            <Link>O projeto</Link>
          </Text>
          <Text
            marginTop="5px"
            color="white"
            paddingBottom="5px"
            transition="0.4s"
            borderBottom="2px solid #FED7D7"
            _hover={{
              borderBottom: '2px solid black',
            }}
          >
            <Link to="/contact">Contato</Link>
          </Text>
          <Text
            marginTop="5px"
            color="white"
            paddingBottom="5px"
            transition="0.4s"
            borderBottom="2px solid #FED7D7"
            _hover={{
              borderBottom: '2px solid black',
            }}
          >
            <Link>Saiba Mais</Link>
          </Text>
        </Flex>

        <Flex>
          <Button
            height="30px"
            backgroundColor="transparent"
            border="2px solid #fff"
            color="#fff"
            borderRadius="20px"
            marginInline="5px"
            fontSize="16px"
            transition="0.4s"
            _hover={{
              color: '#2A4058',
              border: '2px solid #fff',
              bgColor: '#fff',
            }}
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
          <Button
            height="30px"
            backgroundColor="#fff"
            border="2px solid black"
            color="#2A4058"
            borderRadius="20px"
            transition="0.4s"
            _hover={{
              backgroundColor: 'transparent',
              color: '#FFF',
              border: '2px solid #FFF',
            }}
            onClick={() => history.push('/register')}
          >
            Cadastrar-se
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
