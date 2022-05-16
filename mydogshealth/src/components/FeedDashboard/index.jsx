import { Box, Text } from '@chakra-ui/react';
import CardFeed from '../CardFeed';

const FeedDashboard = () => {
  const arrayFeed = [
    {
      titulo: 'OLá Mundo',
      texto:
        'Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats chirp at birds or just going to dip my paw in your coffee and do a taste test',
    },
    {
      titulo: 'OLá Mundo',
      texto:
        'Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats chirp at birds or just going to dip my paw in your coffee and do a taste test',
    },
    {
      titulo: 'OLá Mundo',
      texto:
        'Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats chirp at birds or just going to dip my paw in your coffee and do a taste test',
    },
    {
      titulo: 'OLá Mundo',
      texto:
        'Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats chirp at birds or just going to dip my paw in your coffee and do a taste test',
    },
  ];
  return (
    <Box
      borderRadius="8px"
      padding="12px 24px"
      bgColor="#F56565"
      display="flex"
      flexDir="column"
      width="400px"
    >
      <Box
        fontSize="2.5rem"
        color="#2B2424"
        justifySelf="center"
        fontWeight="bold"
        width="400px"
      >
        <Text marginLeft="30%" fontFamily="Poppins">
          Feed
        </Text>
      </Box>
      {arrayFeed.map(feed => {
        return <CardFeed title={feed.titulo} text={feed.texto} />;
      })}
    </Box>
  );
};

export default FeedDashboard;
