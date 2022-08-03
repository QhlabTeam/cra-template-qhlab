import {css} from '@emotion/react';
import {between, size} from 'polished';

import {Image} from '../../components/Image';
import {useGetUserInfo} from './api/useGetUserInfo';

export function PostListItemAvatar({seed}) {
  const {data} = useGetUserInfo({seed});

  if (!data) return <div>Loading...</div>;

  const info = data.results[0];

  return (
    <Image
      alt='PostListItemAvatar'
      css={css`
        ${size(between('40px', '50px'))}
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid white;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
      `}
      src={info.picture.thumbnail}
    />
  );
}
