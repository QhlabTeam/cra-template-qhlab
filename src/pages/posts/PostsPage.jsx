import {Page} from '../../components/Page';
import {PostList} from '../../features/posts/PostList';

export function PostsPage() {
  return (
    <Page className='PostsPage'>
      <PostList />
    </Page>
  );
}
