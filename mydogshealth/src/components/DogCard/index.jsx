import { Flex, Img, Text, Button, Box } from '@chakra-ui/react';
import { MdOutlineEditNote, MdHealthAndSafety, MdPets } from 'react-icons/md';
const DogCard = ({ info }) => {
  const { name, id, thumb, breed, gender, birth } = info;
  return (
    <Flex
      backgroundColor="#FFFF"
      width="300px"
      flexDirection="column"
      alignItems="center"
      marginTop="20px"
      borderRadius="5px"
      boder="solid 2px"
      boxShadow="0 3px 2px 2px #333333"
      mr="20px"
    >
      <Flex width="100%" justifyContent="space-around">
        {/* <Button margin="2px" padding="0" backgroundColor="transparent">
          <MdOutlineEditNote size="30px" color="#b84040" />
        </Button> */}
        <Button
          margin="2px"
          padding="0"
          backgroundColor="transparent"
          cursor="auto"
        >
          <MdPets size="30px" color="#2A4058" />
        </Button>
        {/* <Button margin="2px" padding="0" backgroundColor="transparent">
          <MdHealthAndSafety size="30px" color="#b84040" />
        </Button> */}
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Img
          width="230px"
          height="230px"
          borderRadius="20px"
          border="2px solid #333333"
          objectFit="cover"
          src={thumb}
          alt={name}
        />
        <Box marginBlock="10px" width="190px">
          <Flex>
            <Text
              fontWeight="600"
              marginRight="4px"
              fontSize="20px"
              width="50%"
              color="#26226B"
            >
              {'Nome:'}
            </Text>
            <Text width="80%" fontWeight="600" fontSize="20px" color="#2A4058">
              {name}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontWeight="600"
              marginRight="4px"
              fontSize="20px"
              width="50%"
              color="#26226B"
            >
              {'Raça:'}
            </Text>
            <Text width="80%" fontWeight="600" fontSize="20px" color="#2A4058">
              {breed}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontWeight="600"
              marginRight="4px"
              fontSize="20px"
              width="50%"
              color="#26226B"
            >
              {'Sexo:'}
            </Text>
            <Text width="80%" fontWeight="600" fontSize="20px" color="#2A4058">
              {gender}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontWeight="600"
              marginRight="4px"
              fontSize="20px"
              width="50%"
              color="#26226B"
            >
              {'Id:'}
            </Text>
            <Text width="80%" fontWeight="600" fontSize="20px" color="#2A4058">
              {id}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DogCard;
