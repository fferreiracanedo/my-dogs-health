import { Box, Flex, Image, Text } from '@chakra-ui/react';
import dogMainSection from '../../assets/image/dogMainSection.svg';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import {
  MdOutlineEditNote,
  MdHealthAndSafety,
  MdPets,
  MdChevronRight,
  MdCheckCircle,
} from 'react-icons/md';

import { useSelector } from 'react-redux';

const HeaderMainSection = () => {
  const user = useSelector(state => state.user);
  const dogs = useSelector(state => state.dogs);

  return (
    <Flex
      display="flex"
      justifyContent="space-around"
      width="100%"
      alignItems="center"
    >
      <Box display="flex">
        <Text
          fontSize={{ base: '14px', md: '14px', lg: '18px' }}
          padding="5px"
          marginLeft="10px"
          fontFamily="Inter"
        >
          Olá, {user.profile.name}!
        </Text>
      </Box>
      <Box display="flex" alignItems="center" marginRight="10px">
        <Image
          borderRadius="100%"
          margin="2%"
          width="50%"
          height="50%"
          maxHeight="70px"
          src="https://img.freepik.com/vetores-gratis/pastor-australiano-fofo_138676-2071.jpg?t=st=1653169916~exp=1653170516~hmac=0a4ff7080ac27062a10ffa594f1b8b900f1a54412132628ad523003f6d1700b8&w=740"
        />
        <Text
          fontSize={{ base: '14px', md: '14px', lg: '18px' }}
          padding="5px"
          fontFamily="Inter"
          fontWeight="bold"
        >
          Doguinhos
          <Text marginLeft="30px" fontFamily="Poppins">
            {dogs.list && dogs.list.length}
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};
export default HeaderMainSection;
