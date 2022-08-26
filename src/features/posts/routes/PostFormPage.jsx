import {Layout} from '../components/Layout';
import {PostForm} from '../components/PostForm';

export function PostFormPage() {
  return (
    <Layout showBackButton title='New Post'>
      <PostForm />
    </Layout>
  );
}
