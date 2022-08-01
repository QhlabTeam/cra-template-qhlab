import {images} from '../../assets';
import {Image} from '../../components/Image';
import {Page} from '../../components/Page';

export function HomePage() {
  return (
    <Page
      className='HomePage'
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Image
        alt='logo'
        src={images.logo}
        style={{
          width: '100%',
          maxWidth: 500,
        }}
      />
    </Page>
  );
}
