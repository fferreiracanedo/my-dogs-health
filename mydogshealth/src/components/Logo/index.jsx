import { Image } from '@chakra-ui/react';
import Logoimg from './mdhLogo.svg';
import { useHistory } from 'react-router-dom';

const Logo = ({ width }) => {
  const history = useHistory();

  return (
    <Image
      src={Logoimg}
      alt="Logo My Dogs Health"
      width={width}
      cursor="pointer"
      onClick={() => history.push('/')}
    />
  );
};

export default Logo;
