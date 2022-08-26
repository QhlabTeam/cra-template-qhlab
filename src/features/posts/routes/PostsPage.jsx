import {RiAddLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Layout} from '../components/Layout';
import {PostList} from '../components/PostList';
import {AddButton} from './styles';

export function PostsPage() {
  return (
    <Layout
      actionElement={
        <AddButton as={Link} to='/posts/new'>
          <RiAddLine size={20} />
          <span>New Post</span>
        </AddButton>
      }
      title='Posts'
    >
      <PostList />
    </Layout>
  );
}
