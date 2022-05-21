import { Box, Img} from '@chakra-ui/react';
import { Carousel } from '3d-react-carousal';
import { useSelector } from 'react-redux';

const CardSlide = () => {
  const dogs = useSelector(state => state.dogs);
  const cardList = dogs.list.map((item, index)=> <Img width="300px" height="200px" src={item.thumb} alt={item.name} title={item.name} />); 
  return (
    <Box width="100%" height="200px">
      {dogs.list && <Carousel slides={cardList} autoplay={true} />}
    </Box>
  );
};

export default CardSlide;
