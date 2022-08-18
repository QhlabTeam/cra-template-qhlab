import {RiArrowLeftSLine} from 'react-icons/ri';
import {useNavigate, useParams} from 'react-router-dom';

import {Page} from '../../components/Page';
import {PostDetail} from '../../features/PostDetail';
import {AddButton} from '../../features/Posts/styles';
import {Container} from '../PostsPage/styles';

export function PostDetailPage() {
  const {id} = useParams();
  const navigate = useNavigate();

  return (
    <Page className='PostDetailPage'>
      <Container>
        <AddButton
          style={{
            alignSelf: 'flex-start',
            marginBottom: 20,
          }}
          onClick={() => navigate(-1)}
        >
          <RiArrowLeftSLine />
          Back
        </AddButton>

        <PostDetail id={id} />
      </Container>
    </Page>
  );
}
