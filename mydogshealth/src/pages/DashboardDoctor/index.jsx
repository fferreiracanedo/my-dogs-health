import { Flex, Box, Text, Divider, Image } from '@chakra-ui/react';
import MenuDashboard from '../../components/MenuDashboard';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import qualquerCoisa from '../../assets/image/task.svg';

const DashboardDoctor = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100%">
      <HeaderDashBoard />
      <Box display="flex">
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
          alignItems={{ base: 'center', md: 'baseline', lg: 'baseline' }}
          justifyContent="space-between"
        >
          <MenuDashboard />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="100vh"
        >
          <Box
            width={{ base: '50%', sm: '35%', md: '30%', lg: '25%' }}
            maxWidth="150px"
            height="150px"
          >
            <Image src={qualquerCoisa} />
          </Box>
          <Box width={{base:"80%", sm:"65%", md:"50%", lg:"40%"}} display="flex" bgColor="#AC5858" borderRadius="15px">
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              alignItems="center"
            >
              <Box
                padding="10px"
                display="flex"
                width="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight="700" color="#FFFFFF">
                  Nome:
                </Text>
                <Text as="span" fontSize="14" fontWeight="500" color="#FFFFFF">
                  {' '}
                  Nome do medico aqui
                </Text>
              </Box>
              <Box
                padding="10px"
                display="flex"
                width="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight="700" color="#FFFFFF">
                  Cidade:
                </Text>
                <Text as="span" fontSize="14" fontWeight="500" color="#FFFFFF">
                  {' '}
                  Cidade onde reside
                </Text>
              </Box>
              <Box
                padding="10px"
                display="flex"
                width="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight="700" color="#FFFFFF">
                  Categoria:
                </Text>
                <Text as="span" fontSize="14" fontWeight="500" color="#FFFFFF">
                  {' '}
                  Veterinário
                </Text>
              </Box>
              <Box
                padding="10px"
                display="flex"
                width="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight="700" color="#FFFFFF">
                  Certificado CRMV:
                </Text>
                <Text as="span" fontSize="14" fontWeight="500" color="#FFFFFF">
                  {' '}
                  454.454.454.454
                </Text>
              </Box>
              <Box
                padding="10px"
                display="flex"
                width="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight="700" color="#FFFFFF">
                  Telefone:
                </Text>
                <Text as="span" fontSize="14" fontWeight="500" color="#FFFFFF">
                  {' '}
                  013-9-9999-9999
                </Text>
              </Box>
              <Box
                padding="10px"
                display="flex"
                width="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight="700" color="#FFFFFF">
                  Bio:
                </Text>
                <Text as="span" fontSize="14" fontWeight="500" color="#FFFFFF" textAlign="center">
                  {' '}
                  Uma pequena descrição do medico onde ele pode escrever algumas
                  coisas para ver o tamanho que fica isso aqui
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default DashboardDoctor;
