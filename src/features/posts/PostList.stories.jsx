import {RiArrowLeftLine, RiArrowRightLine} from 'react-icons/ri';

import {PostList} from './PostList';
import {PostListItemAvatar} from './PostListItemAvatar';
import {
  PostListItem,
  PostListPagination,
  PostListPaginationButton,
} from './styles';

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

export const StaticItem = (args) => (
  <PostListItem>
    <PostListItemAvatar seed={args.seed} />
    <div>
      <h2 style={{textTransform: 'capitalize'}}>{args.title}</h2>
      <p>{args.body}</p>
    </div>
  </PostListItem>
);
StaticItem.args = {
  /** Avatar random seed */
  seed: 1,
  title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vel tenetur ipsum harum, ad sequi praesentium expedita facilis eaque consequuntur, cupiditate iusto, veritatis incidunt totam dolor voluptas pariatur. Ratione?',
};
StaticItem.argTypes = {
  seed: {description: 'Avatar random seed'},
  title: {description: 'Post title'},
  body: {description: 'Post description'},
};

export const StaticPagination = ({onClickPrev, onClickNext}) => (
  <PostListPagination>
    <PostListPaginationButton disabled onClick={onClickPrev}>
      <RiArrowLeftLine />
    </PostListPaginationButton>

    <PostListPaginationButton onClick={onClickNext}>
      <RiArrowRightLine />
    </PostListPaginationButton>
  </PostListPagination>
);
StaticPagination.argTypes = {
  onClickPrev: {action: 'onClickPrev'},
  onClickNext: {action: 'onClickNext'},
};
