import {Page} from '../../components/Page';
import {PostForm} from '../../features/PostForm';
import {Header} from '../../features/Posts/styles';
import {Container} from '../PostsPage/styles';

export function PostFormPage() {
  return (
    <Page className='PostFormPage'>
      <Container>
        <Header />

        <PostForm />
      </Container>
    </Page>
  );
}
