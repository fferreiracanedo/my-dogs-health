import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionSecundaria from '../../components/SectionSecundaria';
import SectionPrincipal from '../../components/SectionPrincipal';

const LandingPage = () => {
  return (
    <Flex flexDir="column" width="100%">
      <Header />
      <SectionPrincipal />
      <SectionSecundaria />
      <Footer />
    </Flex>
  );
};
export default LandingPage;
