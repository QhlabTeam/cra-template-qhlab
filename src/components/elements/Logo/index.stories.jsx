import {Logo} from '.';
import * as ImageStories from '../Image/index.stories';
import ImageStoriesDefault from '../Image/index.stories';

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
