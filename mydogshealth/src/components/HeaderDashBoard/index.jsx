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
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from '@chakra-ui/react';

import { BiAddToQueue } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
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
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Box>
          <Text fontFamily="Inter" color="#000">
            Nome
          </Text>
          <Text fontFamily="Poppins" color="#6d6666">
            @Sobrenome
          </Text>
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
