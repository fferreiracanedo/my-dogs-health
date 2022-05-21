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
          fontFamily="Inter"
          marginLeft="5px"
          marginBottom="20px"
        >
          Uma Plataforma única que ajuda a saúde do seu cãozinho
        </Text>
        <Image
          borderRadius="8px"
          width="95%"
          src="https://img.freepik.com/fotos-gratis/linda-mulher-morena-brinca-com-dois-cachorros-shiba-inu-desvia-o-olhar-pensa-em-como-alimentar-bichinhos-e-ensinar-comandos-expressa-caricia-isolada-em-fundo-rosa_273609-34195.jpg?t=st=1653145051~exp=1653145651~hmac=5f1f79bc39c86630c5ce39e14f9fc559c40e4a78b71e7d5424f9ab1cbe37c286&w=740"
          alt="Imagem logo My Dogs Health"
          maxHeight="415px"
        />
        <Text marginTop="20px" fontFamily="Poppins" fontSize="18px">
          Deixe seu cãozinho em boas mãos, conte conosco!
        </Text>
      </Box>
    </Flex>
  );
};

export default SectionPrincipal;
