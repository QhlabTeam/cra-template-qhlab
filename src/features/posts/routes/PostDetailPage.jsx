import {useParams} from 'react-router-dom';

import {ContentLayout} from '../../../components/layouts/ContentLayout';
import {PostDetail} from '../components/PostDetail';

export function PostDetailPage() {
  const {id} = useParams();

  return (
    <ContentLayout showBackButton>
      <PostDetail id={id} />
    </ContentLayout>
  );
}
