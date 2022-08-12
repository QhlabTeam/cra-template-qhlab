import {Image} from '../../components/Image';
import {PostDetailContainer} from './components';
import {PostDetail} from './PostDetail';

/** @type {import('@storybook/react').Meta} */
export default {
  component: PostDetail,
};

/** @type {import('@storybook/react').Story} */
export const Basic = (args) => <PostDetail id={args.id} />;
Basic.args = {
  id: 1,
};

export const Static = (args) => (
  <PostDetailContainer className='PostDetail'>
    <h2 style={{textTransform: 'capitalize'}}>{args.title}</h2>
    <div>
      <Image size={40} src={args.avatar} />
      <address>
        {args.firstName} {args.lastName}
      </address>
    </div>
    <p>{args.body}</p>
  </PostDetailContainer>
);
Static.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam?',
  avatar: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
  firstName: 'John',
  lastName: 'Doe',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint eius vitae qui, eveniet maiores voluptate, suscipit aliquid laboriosam aliquam perspiciatis nisi assumenda. Iusto voluptatum aliquid natus ratione omnis est!',
};
