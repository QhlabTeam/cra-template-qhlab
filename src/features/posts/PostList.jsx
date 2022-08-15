import {useState} from 'react';
import {RiArrowLeftLine, RiArrowRightLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {useGetPosts} from './api/useGetPosts';
import {PostListItemAvatar} from './PostListItemAvatar';
import {
  PostListContainer,
  PostListItem,
  PostListPagination,
  PostListPaginationButton,
} from './styles';

export function PostList() {
  const [page, setPage] = useState(1);
  const {data} = useGetPosts({
    query: {
      _page: page,
      _limit: 10,
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
    <PostListContainer className='PostList'>
      {data.map((item) => (
        <Link key={item.id} to={`/posts/${item.id}`}>
          <PostListItem>
            <PostListItemAvatar seed={item.id} />
            <div>
              <h2 style={{textTransform: 'capitalize'}}>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </PostListItem>
        </Link>
      ))}

      <PostListPagination>
        <PostListPaginationButton
          disabled={page <= 1}
          onClick={handleClickPrevPage}
        >
          <RiArrowLeftLine />
        </PostListPaginationButton>

        <PostListPaginationButton onClick={handleClickNextPage}>
          <RiArrowRightLine />
        </PostListPaginationButton>
      </PostListPagination>
    </PostListContainer>
  );
}
