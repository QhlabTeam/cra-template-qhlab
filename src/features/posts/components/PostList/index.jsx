import {useState} from 'react';
import {RiArrowLeftLine, RiArrowRightLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Image} from '../../../../components/Image';
import {THEME} from '../../../../constants/theme';
import {useGetPosts} from '../../api/useGetPosts';
import {
  List,
  ListItemAuthor,
  ListItemHeader,
  ListItemAvatar,
  ListItemCover,
  NoPostsData,
} from './styles';
import {ListItem, ListPagination, ListPaginationButton} from './styles';

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
    <div className='PostList'>
      {data?.length > 0 ? (
        <>
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
        </>
      ) : (
        <NoPostsData>
          No posts data.{' '}
          <Link
            style={{
              color: THEME.colors.primary,
              textDecoration: 'underline',
            }}
            to='/posts/new'
          >
            👉🏻 Create your first post.
          </Link>
        </NoPostsData>
      )}
    </div>
  );
}
