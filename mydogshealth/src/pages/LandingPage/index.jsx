import { Box, Flex, Text } from '@chakra-ui/react';
import SectionPrincipal from '../../components/LandingPageSectionPrincipal';
const LandingPage = () => {
  return (
    <Flex width="100%">
      <Box width="100%">
        <Text>Landing Page</Text>
        <SectionPrincipal />
      </Box>
    </Flex>
  );
};
export default LandingPage;
