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

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../store/modules/api/thunks';
import { useSelector } from 'react-redux';

const HeaderDashBoard = () => {
  const history = useHistory();
  const date = new Date();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <Box
      boxShadow="-webkit-box-shadow: -1px 6px 9px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 6px 9px -3px rgba(0,0,0,0.75);
    box-shadow: -1px 6px 9px -3px rgba(0,0,0,0.75);"
      marginBottom="2px"
      bgColor="#ffffff"
      w="100%"
    >
      <Flex
        w="100%"
        m="0 auto"
        justifyContent={{ base: 'space-evenly', md: 'space-between' }}
        p={{ base: '15px 0', md: '15px 38px' }}
        align="center"
      >
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Box>
          <Text fontFamily="Inter" color="#000">
            {user.profile && user.profile.name}
          </Text>
          <Text fontFamily="Poppins" color="#6d6666">
            {user.profile && user.profile.email}
          </Text>
        </Box>
        <Flex
          w="190px"
          height="40px"
          justifyContent="space-between"
          bgColor="#2A4058"
          padding="13px 20px"
          borderRadius="13px"
          color="white"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text marginTop="-4px" fontFamily="Inter">
            {date.toLocaleDateString()}
          </Text>
          <Text marginTop="-4px" fontFamily="Inter">
            14:33
          </Text>
        </Flex>

        <Menu>
          <MenuButton as={Button} bgColor="#2A4058" color="white">
            Perfil
          </MenuButton>
          <MenuList color="#6d6666">
            <MenuGroup title="Perfil">
              <MenuItem onClick={() => history.push('/perfil')}>
                Minha Conta
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(logoutThunk());
                  history.push('/');
                }}
              >
                Sair{' '}
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Ajuda">
              <MenuItem>Docs</MenuItem>
              <MenuItem onClick={() => history.push('/contact')}>
                Contato
              </MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
export default HeaderDashBoard;
