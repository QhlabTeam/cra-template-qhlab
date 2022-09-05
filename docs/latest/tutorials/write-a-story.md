# Write a Story

## UI Component Story

A component story shows a component use case

For example, let's write a Image component story

```plain
src
└── components
    ├── Image.jsx
    └── Image.stories.jsx
```

[Image.stories.jsx](../../../src/components/Image.stories.jsx)

```jsx
import {images} from '../assets';
import {Image} from './Image';

/** @type {import('@storybook/react').Meta} */
export default {
  component: Image,
  args: {
    src: images.logo,
  },
  argTypes: {
    width: {
      description: 'Image width (px)',
      control: {
        type: 'range',
        min: 10,
        max: 300,
      },
    },
    height: {
      description: 'Image height (px)',
      control: {
        type: 'range',
        min: 10,
        max: 300,
      },
    },
    size: {
      type: 'number',
      description: 'Both width and height',
      control: {
        type: 'range',
        min: 10,
        max: 300,
      },
    },
    fit: {
      description: "Same as 'object-fit' property",
      control: {
        type: 'radio',
        options: ['initial', 'contain', 'cover'],
      },
    },
  },
};

const Template = (args) => <Image {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  width: 200,
  height: 100,
  size: undefined,
  fit: 'contain',
};

export const Avatrar = ({borderRadius, ...args}) => (
  <Image style={{borderRadius}} {...args} />
);
Avatrar.args = {
  src: 'https://avatars.dicebear.com/api/pixel-art-neutral/qhlab.svg',
  size: 200,
  fit: 'cover',
  borderRadius: '50%',
};

```

## Feature Component Story

A feature story shows a fully funtional feature component use case

For example, let's write a Intro story

```plain
src
└── features
    └── intro
        └── components
            ├── Intro.jsx
            └── Intro.stories.jsx
```

[Intro.stories.jsx](../../../src/features/intro/components/Intro.stories.jsx)

```jsx
import {Page} from '../../../components/Page';
import {Intro} from './Intro';

/** @type {import('@storybook/react').Meta} */
export default {
  component: Intro,
  parameters: {
    reactRouter: {
      routePath: '*',
    },
  },
};

export const Primary = (args) => (
  <Page
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Intro {...args} />
  </Page>
);
Primary.storyName = 'Intro';
```
