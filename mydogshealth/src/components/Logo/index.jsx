import { Image } from '@chakra-ui/react';
import Logoimg from './mdhLogo.svg';

const Logo = ({ width }) => {
  return <Image src={Logoimg} alt="Logo My Dogs Health" width={width} />;
};

export default Logo;
