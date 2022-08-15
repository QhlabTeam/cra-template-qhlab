import {Page} from '../../components/Page';
import {PostList} from '../../features/Posts';

export function PostsPage() {
  return (
    <Page className='PostsPage'>
      <PostList />
    </Page>
  );
}
