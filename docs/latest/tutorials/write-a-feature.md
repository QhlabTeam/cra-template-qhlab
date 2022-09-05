# Write a Feature

Let's create an "intro" feature

## Create "intro" folder

```plain
src
└── features
    └── intro
        ├── api
        ├── components
        └── routes
```

## Create "IntroPage" route

```plain
intro
└── routes
    └── IntroPage.jsx
```

[IntroPage.jsx](../../../src/features/intro/routes/IntroPage.jsx)

```jsx
import styled from '@emotion/styled';
import {RiExternalLinkLine} from 'react-icons/ri';

import {images} from '../../../assets';
import {Image} from '../../../components/Image';
import {Logo} from '../../../components/Logo';
import {Page} from '../../../components/Page';
import {Intro} from '../components/Intro';

const ExternalLink = styled.a({
  display: 'inline-flex',
  gap: 4,
  fontSize: 14,
  position: 'absolute',
  top: 20,
  right: 20,
  alignItems: 'center',
});

export function IntroPage() {
  return (
    <Page
      className='IntroPage'
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

```

## Create "Intro" component

Since we have used a `Intro` component which requires api to fetch intro information from remote server, so let's implement it

```plain
intro
└── components
    └── Intro.jsx
```

[Intro.jsx](../../../src/features/intro/components/Intro.jsx)

```jsx
import {RiMouseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Container, Heading, Contents} from './styles';

export function Intro() {
  return (
    <Container className='Intro'>
      <Heading>Welcome to Qhlab</Heading>

      <Contents>
        <span>→ Check out the example page of</span>
        <Link to='/posts'>
          Posts <RiMouseLine />
        </Link>
      </Contents>
    </Container>
  );
}

```

So far so good! Now we basically finished "intro" feature.

## Register on AppRoutes

Once we finished a feature, the last thing is to register it on `AppRoutes.jsx` so that it can be rendered.

AppRoutes

```jsx
export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route index element={<IntroPage />} />
        ...
      </Routes>
    </Suspense>
  );
}
```
