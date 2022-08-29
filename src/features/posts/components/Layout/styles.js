import styled from '@emotion/styled';
import {size} from 'polished';

import {images} from '../../../../assets';
import {Image} from '../../../../components/elements/Image';
import {Page as StyledPage} from '../../../../components/layout/Page';

export const Page = styled(StyledPage)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const BackButton = styled.button`
  margin-right: 10px;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.06);
`;
export const Title = styled.h1``;
export const Actionbar = styled.div`
  margin-left: auto;
`;
export const Main = styled.main``;

export const Avatar = styled(Image)`
  ${size(44)}
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
Avatar.defaultProps = {
  src: images.user,
};

export const UserButton = styled.button`
  display: inline-flex;
  background: none;
  margin-left: 12px;
`;
