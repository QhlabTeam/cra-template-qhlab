import styled from '@emotion/styled';

export const PostListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 0;
  list-style-type: none;
`;

export const PostListItem = styled.li`
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  gap: 20px;
`;

export const PostListPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PostListPaginationButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;

  &:disabled {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const PostDetailContainer = styled(PostListItem)`
  width: 100%;
  max-width: 520px;
  flex-direction: column;
`;
