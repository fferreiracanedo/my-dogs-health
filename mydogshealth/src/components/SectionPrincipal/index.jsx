import ImgLogo from '../../assets/image/LogoLandign.svg';
import Logo from '../../assets/image/My Dogs Health.svg';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
const SectionPrincipal = () => {
  return (
    <Flex
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          src={Logo}
          display={{ base: 'none', md: 'block' }}
          width="500px"
        ></Image>
        <Text
          marginTop="60px"
          textAlign="center"
          fontSize={{ base: '16px', md: '22px', lg: '26px' }}
          marginRight="5px"
          marginLeft="5px"
        >
          Uma Plataforma única que ajuda a saúde do seu cãozinho
        </Text>
        <Image
          src={ImgLogo}
          alt="Imagem logo My Dogs Health"
          maxHeight="415px"
        />
        <Text fontSize="14px">DEIXE SEU CÃOZINHO EM BOAS MÃOS</Text>
      </Box>
    </Flex>
  );
};
export default SectionPrincipal;
