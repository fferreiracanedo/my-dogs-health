import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import profilePicture from '../../assets/image/ProfilePicture.svg';
import { BiAddToQueue } from 'react-icons/bi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const HeaderDashBoard = () => {
  const history = useHistory();
  const date = new Date();
  console.log(date.toLocaleDateString());
  return (
    <Box w="100%">
      <Flex
        w="100%"
        m="0 auto"
        justifyContent={{ base: 'space-evenly', md: 'space-evenly' }}
        p="15px 5px"
        align="center"
      >
        <Image
          src={profilePicture}
          w="54px"
          h="54px"
          borderRadius="50px"
        ></Image>
        <Box>
          <Text color="#000">Nome</Text>
          <Text color="#FFF4F4">Sobrenome</Text>
        </Box>
        <Flex
          w="16.5rem"
          justifyContent="space-between"
          bgColor="#8E2C2C"
          padding="13px 20px"
          borderRadius="13px"
          color="white"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text>{date.toLocaleDateString()}</Text>
          <Text>14:33</Text>
        </Flex>
        <Flex
          w="14rem"
          justifyContent="space-between"
          bgColor="#8E2C2C"
          padding="13px 20px"
          borderRadius="13px"
          color="white"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text>Faça uma Consulta</Text>
          <Text>
            <BiAddToQueue />
          </Text>
        </Flex>
        <Menu>
          <MenuButton as={Button} bgColor="#8E2C2C" color="white">
            Perfil
          </MenuButton>
          <MenuList>
            <MenuGroup title="Perfil">
              <MenuItem>Minha Conta</MenuItem>
              <MenuItem onClick={() => history.push('/')}>Sair </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Ajuda">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
export default HeaderDashBoard;
