import {Page} from '../../components/Page';
import {PostForm} from '../../features/PostForm';
import {Header} from '../../features/Posts/styles';
import {Container} from '../PostsPage/styles';

export function NewPostPage() {
  return (
    <Page className='NewPostPage'>
      <Container>
        <Header />

        <PostForm />
      </Container>
    </Page>
  );
}
