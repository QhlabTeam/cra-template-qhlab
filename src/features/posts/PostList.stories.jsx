import {PostList} from './PostList';

/** @type {import('@storybook/react').Meta} */
export default {
  component: PostList,
  parameters: {
    reactRouter: {
      routePath: '/posts',
    },
  },
};
export const Basic = (args) => <PostList />;
