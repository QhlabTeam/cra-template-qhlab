import {RiArrowLeftSLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Page} from '../../components/Page';
import {PostForm} from '../../features/PostForm';
import {AddButton, Container, Header} from '../PostsPage/styles';

export function NewPostPage() {
  return (
    <Page className='NewPostPage'>
      <Container>
        <Header>
          <AddButton as={Link} to='/posts'>
            <RiArrowLeftSLine />
            Back to Posts
          </AddButton>
        </Header>

        <PostForm />
      </Container>
    </Page>
  );
}
