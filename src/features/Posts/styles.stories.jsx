import {RiArrowLeftLine, RiArrowRightLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Image} from '../../components/Image';
import {db} from '../../mocks/db';
import {
  ListItem,
  ListPagination,
  ListPaginationButton,
  ListItemAuthor,
  ListItemHeader,
  ListItemAvatar,
  ListItemCover,
} from './styles';

export default {};

export const AListItem = (args) => (
  <ListItem>
    <ListItemHeader>
      <Link to='#'>
        <ListItemAvatar src={args.avatar} />
      </Link>
      <ListItemAuthor>
        <strong>{args.username}</strong>
        <time>
          {new Date(args.createdDate).toLocaleDateString().replaceAll('/', '.')}{' '}
        </time>
      </ListItemAuthor>
    </ListItemHeader>
    <ListItemCover>
      <Image fit='cover' src={args.cover} />
    </ListItemCover>
  </ListItem>
);
const post = db.post.findFirst({});
const author = post.author;
AListItem.args = {
  avatar: author.avatar,
  username: author.username,
  createdDate: post.createdAt,
  cover: post.cover,
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
AListPagination.argTypes = {
  onClickPrev: {action: 'onClickPrev'},
  onClickNext: {action: 'onClickNext'},
};
