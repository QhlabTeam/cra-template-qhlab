import styled from '@emotion/styled';

import {Page as StyledPage} from '../../../components/elements/Page';
import {LoginForm} from '../components/LoginForm';

const Page = styled(StyledPage)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export function LoginPage() {
  return (
    <Page className='LoginPage'>
      <LoginForm />
    </Page>
  );
}
