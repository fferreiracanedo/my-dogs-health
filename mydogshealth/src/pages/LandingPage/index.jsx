import { Box, Flex, Text } from '@chakra-ui/react';
import Header from '../../components/Header';

const LandingPage = () => {
  return (
    <Flex width="100%">
      <Header />
      <Box width="100%">
        <Text>Landing Page</Text>
      </Box>
    </Flex>
  );
};
export default LandingPage;
