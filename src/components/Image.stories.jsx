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
