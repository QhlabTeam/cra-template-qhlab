import {RiAddLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Page} from '../../components/Page';
import {PostList} from '../../features/Posts';
import {Container, Header, AddButton} from './styles';

export function PostsPage() {
  return (
    <Page className='PostsPage'>
      <Container>
        <Header>
          <AddButton as={Link} to='/posts/new'>
            <RiAddLine size={20} />
            <span>New Post</span>
          </AddButton>
        </Header>

        <PostList />
      </Container>
    </Page>
  );
}
