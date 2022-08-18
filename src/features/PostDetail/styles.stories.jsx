import {Link} from 'react-router-dom';

import {ListItemAuthor, ListItemHeader, ListItemAvatar} from '../Posts/styles';
import {PostDetailContainer, PostDetailImage} from './styles';

export default {};

export const PostDetail = (args) => {
  return (
    <PostDetailContainer className='PostDetail'>
      <h1 style={{textTransform: 'capitalize'}}>{args.title}</h1>

      <ListItemHeader>
        <Link to='#'>
          <ListItemAvatar src={args.avatar} />
        </Link>
        <ListItemAuthor>
          <strong>{args.username}</strong>
          <time>
            {new Date(args.createdDate)
              .toLocaleDateString()
              .replaceAll('/', '.')}
          </time>
        </ListItemAuthor>
      </ListItemHeader>

      <a href={args.cover} rel='noreferrer' target='_blank'>
        <PostDetailImage src={args.cover} />
      </a>

      <p dangerouslySetInnerHTML={{__html: args.body}} />
    </PostDetailContainer>
  );
};
PostDetail.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam?',
  avatar: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
  username: 'John Doe',
  createdDate: Date.now(),
  cover: 'https://loremflickr.com/600/400/city?lock=27966',
  body: 'Fuga est et voluptate nihil labore tenetur nesciunt esse omnis. Rerum autem ipsam vel velit incidunt ab et distinctio. Ipsa modi incidunt tempora. Sed illo quibusdam suscipit. Qui sit voluptas et in.<br/><br/>Dolor non ducimus enim deserunt magni aspernatur et. Molestiae repellendus magnam recusandae similique sed qui beatae. Sunt nam ipsam dolores officia suscipit debitis nulla. Minima aut architecto dolor pariatur in dolorum culpa quia.<br/><br/>Voluptatibus et saepe expedita id. Omnis necessitatibus consequatur veritatis sint dignissimos inventore. Fuga aut minus dicta qui et neque quos reprehenderit. Est sit ipsum et consequatur ad.<br/><br/>Recusandae nihil et sed ea. Voluptates et minus nihil dolores ratione enim ut vero voluptatem. Omnis quis libero in quia quae quidem. Iusto expedita quibusdam voluptatem accusamus est ut libero impedit veniam. Quidem accusantium et alias libero vel molestias qui tenetur omnis.<br/><br/>Dolor odit quia magnam culpa error dolores dolorum perferendis. Sed sit eum illum doloribus reiciendis est rem ut non. Officiis quae minus animi facere cumque. Magni ut laudantium. Excepturi cum et velit quae maxime quos dolores. Unde beatae ut non quis accusamus reiciendis consequuntur at eos.',
};
