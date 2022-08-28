import styled from '@emotion/styled';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';

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
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const {state: redirectLocation} = useLocation();
  const redirect = search.get('redirect');

  return (
    <Page className='LoginPage'>
      <LoginForm
        onSuccess={() => navigate(redirectLocation ?? redirect ?? '/posts')}
      />
    </Page>
  );
}
