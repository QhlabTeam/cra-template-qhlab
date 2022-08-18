import {Page} from '../../components/Page';
import {PostList} from '../../features/Posts';
import {Container} from './styles';

export function PostsPage() {
  return (
    <Page className='PostsPage'>
      <Container>
        <PostList />
      </Container>
    </Page>
  );
}
