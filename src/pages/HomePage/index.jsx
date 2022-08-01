import {Page} from '../../components/Page';
import {Logo} from '../../features/brand/Logo';

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
      <Logo />
    </Page>
  );
}
