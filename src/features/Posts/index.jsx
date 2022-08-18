import {useState} from 'react';
import {RiArrowLeftLine, RiArrowRightLine, RiAddLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Image} from '../../components/Image';
import {useGetPosts} from './api/useGetPosts';
import {
  Header,
  AddButton,
  List,
  ListItemAuthor,
  ListItemHeader,
  ListItemAvatar,
  ListItemCover,
} from './styles';
import {
  Container,
  ListItem,
  ListPagination,
  ListPaginationButton,
} from './styles';

export function PostList() {
  const [page, setPage] = useState(1);
  const {data} = useGetPosts({
    query: {
      _page: page,
      _limit: 9,
    },
  });

  function handleClickNextPage() {
    setPage(page + 1);
  }

  function handleClickPrevPage() {
    setPage(page - 1);
  }

  if (!data) return <div>Loading...</div>;

  return (
    <Container className='PostList'>
      <Header>
        <h1>Posts</h1>
        <AddButton as={Link} to='/posts/new'>
          <RiAddLine size={20} />
          <span>New Post</span>
        </AddButton>
      </Header>

      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemHeader>
              <Link to={`#${item.author.id}`}>
                <ListItemAvatar src={item.author.avatar} />
              </Link>
              <ListItemAuthor>
                <strong>{item.author.username}</strong>
                <time>
                  {new Date(item.createdAt)
                    .toLocaleDateString()
                    .replaceAll('/', '.')}{' '}
                </time>
              </ListItemAuthor>
            </ListItemHeader>
            <ListItemCover as={Link} to={`/posts/${item.id}`}>
              <Image fit='cover' src={item.cover} />
            </ListItemCover>
          </ListItem>
        ))}
      </List>

      <ListPagination>
        <ListPaginationButton
          disabled={page <= 1}
          onClick={handleClickPrevPage}
        >
          <RiArrowLeftLine />
        </ListPaginationButton>

        <ListPaginationButton onClick={handleClickNextPage}>
          <RiArrowRightLine />
        </ListPaginationButton>
      </ListPagination>
    </Container>
  );
}
