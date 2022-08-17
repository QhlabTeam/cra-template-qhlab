import styled from '@emotion/styled';
import {RiAddLine} from 'react-icons/ri';

import {Page} from '../../components/Page';
import {PostList} from '../../features/Posts';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 20px 20px 0 20px;
`;

const AddButton = styled.button`
  color: white;
  background-color: royalblue;
  padding: 8px;
  padding-right: 16px;
  gap: 4px;
  border-radius: 4px;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export function PostsPage() {
  return (
    <Page className='PostsPage'>
      <Container>
        <Header>
          <AddButton>
            <RiAddLine size={20} />
            <span>Post</span>
          </AddButton>
        </Header>

        <PostList />
      </Container>
    </Page>
  );
}
