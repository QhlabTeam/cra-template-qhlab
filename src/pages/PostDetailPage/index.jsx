import {RiArrowLeftSLine} from 'react-icons/ri';
import {useNavigate, useParams} from 'react-router-dom';

import {Page} from '../../components/Page';
import {PostDetail} from '../../features/PostDetail';
import {NavButton} from './styles';

export function PostDetailPage() {
  const {id} = useParams();
  const navigate = useNavigate();

  return (
    <Page
      className='PostDetailPage'
      style={{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <PostDetail id={id} />

        <NavButton
          style={{
            marginTop: 20,
          }}
          onClick={() => navigate(-1)}
        >
          <RiArrowLeftSLine />
          <span>Back</span>
        </NavButton>
      </div>
    </Page>
  );
}
