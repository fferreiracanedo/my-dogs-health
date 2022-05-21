import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Image,
    Center,
    Stack,
    Text,
    Tooltip
  } from '@chakra-ui/react';
  import { Heading } from '@chakra-ui/react'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

const DrawerInfo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const dogs = useSelector(state => state.dogs);
    const reports = useSelector(state => state.reports);
    const user = useSelector(state => state.user);
  
    return (
      <>
        <Avatar name={user.profile && user.profile.name} bg='#2A4058' color='white' onClick={onOpen}>
          <AvatarBadge boxSize="1.25em" bg="green.500" /> 
        </Avatar>
       
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Usuário {user.profile && user.profile.user}</DrawerHeader>
            <DrawerBody>
              <Center>
                <Image 
                borderRadius='full'
                boxSize='240px'
                src={user.profile && user.profile.thumb}
                alt={user.profile && user.profile.name}
                m='8'
                /></Center>
                <Stack spacing={12} textAlign='center'>
                    <Tooltip hasArrow label='Nome completo' bg='gray.300' color='black'>
                        <Text fontSize='4xl'>{user.profile && user.profile.username}</Text>
                    </Tooltip>
                    <Tooltip hasArrow label='Nome de Usuário' bg='gray.300' color='black'>
                        <Text fontSize='2xl'>{user.profile && user.profile.name}</Text>
                    </Tooltip>
                    <Tooltip hasArrow label='Cidade' bg='gray.300' color='black'>
                        <Text fontSize='2xl'>{user.profile && user.profile.city}</Text>
                    </Tooltip>
                    <Tooltip hasArrow label='Email Principal' bg='gray.300' color='black'>
                        <Text fontSize='2xl'>{user.profile && user.profile.email}</Text>
                    </Tooltip>
                    {user.profile && user.profile.specialist ? 
                    <Tooltip hasArrow label='Registro no CRMV' bg='gray.300' color='black'>
                        <Text fontSize='2xl'>{user.profile && user.profile.association}</Text>
                    </Tooltip> : null }
                    <Tooltip hasArrow label='Família canina' bg='gray.300' color='black'>
                        <Text fontSize='2xl'>Cuida de {dogs.list.length} pet{dogs.list.length > 1 ? 's':null}</Text>
                    </Tooltip>
                    <Tooltip hasArrow label='Biografia' bg='gray.300' color='black'>
                        <Text fontSize='2xl'>{user.profile && user.profile.bio}</Text>
                    </Tooltip>
                </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  ;}

export default DrawerInfo;