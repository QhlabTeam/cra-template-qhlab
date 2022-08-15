import {Image} from '../../components/Image';
import {useGetUserInfo} from '../Posts/api/useGetUserInfo';
import {useGetPost} from './api/useGetPost';
import {PostDetailContainer} from './styles';

export function PostDetail({id}) {
  const {data: postData} = useGetPost({id});
  const {data: userInfoData} = useGetUserInfo({seed: id});

  const userInfo = userInfoData?.results[0];

  if (!postData || !userInfo) return <div>Loading...</div>;

  return (
    <PostDetailContainer className='PostDetail'>
      <h2 style={{textTransform: 'capitalize'}}>{postData.title}</h2>
      <div>
        <Image size={40} src={userInfo.picture.thumbnail} />
        <address>
          {userInfo.name.first} {userInfo.name.last}
        </address>
      </div>
      <p>{postData.body}</p>
    </PostDetailContainer>
  );
}
