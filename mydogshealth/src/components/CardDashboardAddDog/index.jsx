import { Image, Box, Flex, Button } from "@chakra-ui/react";

const CardDashboardAddDog = () => {
    return (
        <Flex
            backgroundColor="#AC5858"
            padding="1rem"
            borderRadius="8px"
        >
            <Box
                paddingRight="1rem"
            >
                <Box
                    color="#ffffff"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="700"
                >Adicione um Doguinho</Box>
                <Box
                    color="#ffffff"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="700"
                    width="160px"
                    fontSize="0.8rem"
                    padding="0.3rem"
                >Clicando no botão abaixo, você pode adicionar um novo doguinho, facilmente
                </Box>
            </Box>
            <Box
                textAlign="end"
                alignItems="flex-end" 
                alignSelf="end"
            
            >
                {/* COLOCAR IMG QUE VAI SER UTILIZADA NO SRC */}
                <Image alt="Saúde" src={"https://img.freepik.com/fotos-gratis/cachorro-sorridente-fofo-usando-oculos-escuros_23-2148865714.jpg?w=2000"} maxHeight="40px"></Image>
                <Button 
                    backgroundColor='#792323' 
                    color="#fff" 
                    size='xs' 
                    onClick={() => console.log(12)} 
                    fontWeight="bold" 
                    fontSize="1rem"
                    padding="5px 0.8rem"
                    marginTop="0.5rem"
                >
                    +
                </Button>
            </Box>
        </Flex>
    )
}

export default CardDashboardAddDog