import * as ImageStories from './Image.stories';
import ImageStoriesDefault from './Image.stories';
import {Logo} from './Logo';

/** @type {import('@storybook/react').Meta} */
export default {
  component: Logo,
  argTypes: {
    ...ImageStoriesDefault.argTypes,
  },
};

export const Basic = (args) => <Logo {...args} />;
Basic.args = {
  ...ImageStories.Basic.args,
};
Basic.storyName = 'Logo';
