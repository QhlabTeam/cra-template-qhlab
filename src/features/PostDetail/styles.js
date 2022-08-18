import styled from '@emotion/styled';

import {Image} from '../../components/Image';
import {ListItem} from '../Posts/styles';

export const PostDetailContainer = styled.article`
  ${ListItem.__emotion_styles}
  flex: initial;
  height: initial;
  gap: 20px;
`;

export const PostDetailImage = styled(Image)`
  height: initial;
  max-height: 400px;
  border-radius: 12px;
  object-fit: cover;
  cursor: zoom-in;
`;
