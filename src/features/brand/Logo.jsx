import {images} from '../../assets';
import {Image} from '../../components/Image';

export function Logo({src, ...rest}) {
  return (
    <Image
      alt='logo'
      css={{
        width: '100%',
        maxWidth: 500,
        height: 150,
      }}
      src={src ?? images.logo}
      {...rest}
    />
  );
}
