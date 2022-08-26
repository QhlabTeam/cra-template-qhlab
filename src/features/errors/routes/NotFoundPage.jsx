import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

import {Page} from '../../../components/elements/Page';

const ReturnLink = styled(Link)`
  background-color: whitesmoke;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 8px;
  text-decoration: underline;
`;

export function NotFoundPage() {
  return (
    <Page
      className='NotFoundPage'
      css={{justifyContent: 'center', alignItems: 'center'}}
    >
      <h1>Not Found</h1>

      <ReturnLink to='/'>Return Home</ReturnLink>
    </Page>
  );
}
