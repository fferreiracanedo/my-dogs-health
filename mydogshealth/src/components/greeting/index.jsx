import { Flex, Box, Text } from '@chakra-ui/react';

import { FcLike } from 'react-icons/fc';

const Greeting = ({ icon }) => {
  return (
    <Flex>
      <Box padding="12px" display="flex">
        <Text>Desenvolvido com</Text>
        <Box marginLeft="6px" marginRight="6px">
          {(icon = <FcLike />)}
        </Box>

        <Text>Por Equipe 4</Text>
      </Box>
    </Flex>
  );
};

export default Greeting;
