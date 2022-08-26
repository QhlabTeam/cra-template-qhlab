import {useParams} from 'react-router-dom';

import {Layout} from '../components/Layout';
import {PostDetail} from '../components/PostDetail';

export function PostDetailPage() {
  const {id} = useParams();

  return (
    <Layout showBackButton>
      <PostDetail id={id} />
    </Layout>
  );
}
