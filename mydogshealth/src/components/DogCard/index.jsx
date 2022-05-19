import { Flex, Img, Text, Button, Box, WrapItem } from '@chakra-ui/react';
import { MdPets } from 'react-icons/md';
const DogCard = ({ info }) => {
  const { name, id, thumb, breed, gender, birth } = info;
  return (
    <WrapItem>
    <Flex
      backgroundColor="#FFFF"
      width="300px"
      height="400px"
      flexDirection="column"
      alignItems="center"
      marginTop="20px"
      borderRadius="5px"
      boder="solid 2px"
      boxShadow="0 3px 2px 2px #333333"
      mr="20px"
    >
      <Flex width="100%" justifyContent="space-around">
        <Button
          margin="2px"
          padding="0"
          backgroundColor="transparent"
          cursor="auto"
        >
          <MdPets size="30px" color="#2A4058" />
        </Button>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Img
          width="230px"
          height="230px"
          borderRadius="12px"
          border="2px solid #333333"
          objectFit="cover"
          src={thumb}
          alt={name}
        />
        <Box marginBlock="10px" width="200px">
          <Flex flexDirection="column"  justifyContent="space-around">
            <Text width="100%" fontWeight="600" fontSize="16px" color="#2A4058">
              {name} ({gender})
            </Text>
            <Text width="100%" fontWeight="600" fontSize="12px" color="#2A4058">
              {breed} 
            </Text>
            <Text width="100%" fontWeight="600" fontSize="12px" color="#2A4058">
              Id {id} : {birth}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
    </WrapItem>
  );
};

export default DogCard;
