import styled from '@emotion/styled';

import {Page as StyledPage} from '../../../../components/elements/Page';

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
  border-radius: 20px;
`;
export const Title = styled.h1``;
export const Actionbar = styled.div`
  margin-left: auto;
`;
export const Main = styled.main``;
