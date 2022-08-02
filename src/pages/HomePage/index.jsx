import {RiExternalLinkLine} from 'react-icons/ri';

import {images} from '../../assets';
import {Image} from '../../components/Image';
import {Page} from '../../components/Page';
import {Logo} from '../../features/brand/Logo';
import {Intro} from '../../features/intro/Intro';

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
      <a
        className='github'
        css={{
          display: 'inline-flex',
          gap: 4,
          fontSize: 14,
          position: 'absolute',
          top: 20,
          right: 20,
          alignItems: 'center',
        }}
        href='https://github.com/QhlabTeam/cra-template-qhlab#readme'
        rel='noreferrer'
        target='_blank'
      >
        <Image size={18} src={images.githubMark} /> Docs <RiExternalLinkLine />
      </a>

      <Intro />

      <Logo
        css={{
          position: 'absolute',
          bottom: 20,
          height: 60,
        }}
      />
    </Page>
  );
}
