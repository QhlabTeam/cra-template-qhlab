import {ContentLayout} from '../../../components/layouts/ContentLayout';
import {PostForm} from '../components/PostForm';

export function PostFormPage() {
  return (
    <ContentLayout showBackButton title='New Post'>
      <PostForm />
    </ContentLayout>
  );
}
