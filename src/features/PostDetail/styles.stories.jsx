import {Image} from '../../components/Image';
import {PostDetailContainer} from './styles';

export default {};

export const PostDetail = (args) => (
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
PostDetail.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam?',
  avatar: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
  firstName: 'John',
  lastName: 'Doe',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint eius vitae qui, eveniet maiores voluptate, suscipit aliquid laboriosam aliquam perspiciatis nisi assumenda. Iusto voluptatum aliquid natus ratione omnis est!',
};
