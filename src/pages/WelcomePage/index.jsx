import styled from '@emotion/styled';
import {RiExternalLinkLine} from 'react-icons/ri';

import {images} from '../../assets';
import {Image} from '../../components/Image';
import {Logo} from '../../components/Logo';
import {Page} from '../../components/Page';
import {Intro} from '../../features/Intro';

const ExternalLink = styled.a({
  display: 'inline-flex',
  gap: 4,
  fontSize: 14,
  position: 'absolute',
  top: 20,
  right: 20,
  alignItems: 'center',
});

export function WelcomePage() {
  return (
    <Page
      className='WelcomePage'
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <ExternalLink
        className='github'
        href='https://github.com/QhlabTeam/cra-template-qhlab#readme'
        rel='noreferrer'
        target='_blank'
      >
        <Image size={18} src={images.githubMark} />
        <span>Docs</span>
        <RiExternalLinkLine />
      </ExternalLink>

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
