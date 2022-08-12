import {PostListItem} from './components';
import {PostListItemAvatar} from './PostListItemAvatar';

/** @type {import('@storybook/react').Meta} */
export default {
  component: PostListItem,
  args: {
    /** Avatar random seed */
    seed: 1,
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vel tenetur ipsum harum, ad sequi praesentium expedita facilis eaque consequuntur, cupiditate iusto, veritatis incidunt totam dolor voluptas pariatur. Ratione?',
  },
  argTypes: {
    seed: {description: 'Avatar random seed'},
    title: {description: 'Post title'},
    body: {description: 'Post description'},
  },
};

export const ListItem = (args) => (
  <PostListItem>
    <PostListItemAvatar seed={args.seed} />
    <div>
      <h2 style={{textTransform: 'capitalize'}}>{args.title}</h2>
      <p>{args.body}</p>
    </div>
  </PostListItem>
);
