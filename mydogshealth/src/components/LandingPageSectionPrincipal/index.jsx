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
          width="60%"
          maxWidth="220px"
          src={Logo}
          alt="Logo My Dogs Health"
          marginBottom="10px"
        />
        <Text
          textAlign="center"
          fontSize="16px"
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
