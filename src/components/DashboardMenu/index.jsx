import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react';
import { GrHomeRounded } from 'react-icons/gr';
import { GiHealthNormal } from 'react-icons/gi';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../store/modules/api/thunks';

const DashboardMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
          <MenuGroup title="Navegação">
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
            <MenuDivider />
            </MenuGroup>
           
            <MenuGroup title="Ajuda">
              <MenuItem onClick={() => history.push('/contact')}>
                Contato
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem
                onClick={() => {
                  dispatch(logoutThunk());
                  window.location.assign(window.location.hostname);
                }}
              >
                Sair
              </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default DashboardMenu;
