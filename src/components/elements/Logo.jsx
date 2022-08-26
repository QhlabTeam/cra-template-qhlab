import {images} from '../../assets';
import {Image} from './Image';

export function Logo({src, ...rest}) {
  return <Image alt='logo' src={src ?? images.logo} {...rest} />;
}
