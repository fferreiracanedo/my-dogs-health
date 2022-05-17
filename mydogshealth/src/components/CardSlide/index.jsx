import { Box, Img} from '@chakra-ui/react';
import { Carousel } from '3d-react-carousal';

const CardSlide = () => {
  const CardList = [
    <Img
      width="300px"
      height="200px"
      src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/cachorro_correndo_na_grama_verde_com_bola_de_tenis_na_boca.jpg?itok=pbqxzk7K"
      alt="1"
    />,
    <Img
      width="300px"
      height="200px"
      src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
      alt="2"
    />,
    <Img
      width="300px"
      height="200px"
      src="https://img.r7.com/images/cachorro-que-parece-pompom-13012022171412951?dimensions=771x420"
      alt="3"
    />,
  ];

  return (
    <Box width="100%" height="200px">
      <Carousel slides={CardList} autoplay={false} />
    </Box>
  );
};

export default CardSlide;
