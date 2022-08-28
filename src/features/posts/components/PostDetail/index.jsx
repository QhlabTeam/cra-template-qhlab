import {Link} from 'react-router-dom';

import {useGetPost} from '../../api/useGetPost';
import {
  ListItemAuthor,
  ListItemHeader,
  ListItemAvatar,
} from '../PostList/styles';
import {PostDetailContainer, PostDetailImage} from './styles';

export function PostDetail({id}) {
  const {data} = useGetPost({id});

  if (!data) return <div>Loading...</div>;

  return (
    <PostDetailContainer className='PostDetail'>
      <h1 style={{textTransform: 'capitalize'}}>{data.title}</h1>

      <ListItemHeader>
        <Link to={`#${data.author.id}`}>
          <ListItemAvatar src={data.author.avatar} />
        </Link>
        <ListItemAuthor>
          <strong>{data.author.username}</strong>
          <time>
            {new Date(data.createdAt).toLocaleDateString().replaceAll('/', '.')}{' '}
          </time>
        </ListItemAuthor>
      </ListItemHeader>

      <a href={data.cover} rel='noreferrer' target='_blank'>
        <PostDetailImage src={data.cover} />
      </a>

      <p dangerouslySetInnerHTML={{__html: data.body}} />
    </PostDetailContainer>
  );
}
