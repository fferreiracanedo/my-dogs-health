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
  Spinner,
  Tooltip 
} from '@chakra-ui/react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

import { useSelector } from 'react-redux';
import DashboardMenu from '../DashboardMenu';
import DrawerInfo from '../DrawerInfo';

const HeaderDashBoard = () => {
  const date = new Date();
  const user = useSelector(state => state.user);
  
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
        justifyContent={{ base: 'space-evenly', md: 'space-evenly' }}
        p={{ base: '15px 0', md: '15px 0px' }}
        maxW={{ base: '100%', md: '1200px' }}
        align="center"
      >
          <DrawerInfo />
        <Tooltip hasArrow bg='gray.300' color='black' label={user.profile ? 'Usuário ' + user.profile.user : null}>
        <Box>
          <Text fontFamily="Inter" color="#000">
            {user.profile && user.profile.username} {user.profile && user.profile.specialist && user.profile.association}
          </Text>
          <Text fontFamily="Poppins" color="#6d6666">
            {user.profile && user.profile.email}
          </Text>
        </Box>
        </Tooltip>
        <Flex
          height="40px"
          justifyContent="center"
          alignItems='center'
          bgColor="#2A4058"
          padding="0 20px"
          borderRadius="8px"
          color="white"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text fontFamily="Inter">
            {date.toLocaleDateString()}
          </Text>
        </Flex>
        <DashboardMenu />
      </Flex>
    </Box>
  );
};

export default HeaderDashBoard;
