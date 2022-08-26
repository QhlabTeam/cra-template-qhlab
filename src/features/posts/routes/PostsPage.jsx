import {RiAddLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {ContentLayout} from '../../../components/layouts/ContentLayout';
import {PostList} from '../components/PostList';
import {AddButton} from './styles';

export function PostsPage() {
  return (
    <ContentLayout
      actionElement={
        <AddButton as={Link} to='/posts/new'>
          <RiAddLine size={20} />
          <span>New Post</span>
        </AddButton>
      }
      title='Posts'
    >
      <PostList />
    </ContentLayout>
  );
}
