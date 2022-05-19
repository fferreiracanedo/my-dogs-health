import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react';

import { GrHomeRounded } from 'react-icons/gr';
import { GiHealthNormal } from 'react-icons/gi';

import { HamburgerIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
const DashboardMenu = () => {
  const history = useHistory();
  return (
    <Flex>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            bgColor="#2A4058"
          />
          <MenuList color="gray">
            <MenuItem
              icon={<GrHomeRounded />}
              onClick={() => history.push('/dashboard')}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              icon={<GiHealthNormal />}
              onClick={() => history.push('/dashboard/cuidados')}
            >
              Saúde
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default DashboardMenu;
