import {PostListItemAvatar} from './PostListItemAvatar';

/** @type {import('@storybook/react').Meta} */
export default {
  component: PostListItemAvatar,
  args: {
    seed: 1,
  },
};
export const Basic = (args) => <PostListItemAvatar {...args} />;
