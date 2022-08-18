import {RiArrowLeftLine, RiArrowRightLine} from 'react-icons/ri';

import {PostListItemAvatar} from './components/PostListItemAvatar';
import {ListItem, ListPagination, ListPaginationButton} from './styles';

export default {};

export const AListItem = (args) => (
  <ListItem>
    <PostListItemAvatar seed={args.seed} />
    <div>
      <h2 style={{textTransform: 'capitalize'}}>{args.title}</h2>
      <p>{args.body}</p>
    </div>
  </ListItem>
);
ListItem.args = {
  /** Avatar random seed */
  seed: 1,
  title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vel tenetur ipsum harum, ad sequi praesentium expedita facilis eaque consequuntur, cupiditate iusto, veritatis incidunt totam dolor voluptas pariatur. Ratione?',
};
ListItem.argTypes = {
  seed: {description: 'Avatar random seed'},
  title: {description: 'Post title'},
  body: {description: 'Post description'},
};

export const AListPagination = ({onClickPrev, onClickNext}) => (
  <ListPagination>
    <ListPaginationButton disabled onClick={onClickPrev}>
      <RiArrowLeftLine />
    </ListPaginationButton>

    <ListPaginationButton onClick={onClickNext}>
      <RiArrowRightLine />
    </ListPaginationButton>
  </ListPagination>
);
ListPagination.argTypes = {
  onClickPrev: {action: 'onClickPrev'},
  onClickNext: {action: 'onClickNext'},
};
