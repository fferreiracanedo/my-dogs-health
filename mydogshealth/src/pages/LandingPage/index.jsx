import { Box, Flex, Text } from '@chakra-ui/react';
import SectionSecundaria from '../../components/LandingPageSectionSecond';
const LandingPage = () => {
  return (
    <Flex width="100%">
      <Box width="100%">
        <Text>Landing Page</Text>
        <SectionSecundaria />
      </Box>
    </Flex>
  );
};
export default LandingPage;
