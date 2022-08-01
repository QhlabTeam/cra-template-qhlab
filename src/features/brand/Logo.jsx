import {images} from '../../assets';
import {Image} from '../../components/Image';

export function Logo({src}) {
  return (
    <Image
      alt='logo'
      src={src ?? images.logo}
      style={{
        width: '100%',
        maxWidth: 500,
      }}
    />
  );
}
