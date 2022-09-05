import {RiArrowDropLeftLine} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';

import {Head} from '../../../../components/Head';
import {useAuth} from '../../../../hooks/useAuth';
import {
  Page,
  Header,
  BackButton,
  Title,
  Actionbar,
  Main,
  Avatar,
  UserButton,
} from './styles';

export function Layout(
  /** @type {import('./types').ContentLayoutProps} */
  {title, actionElement, showBackButton, children, showUser, ...rest}
) {
  const navigate = useNavigate();
  const {userInfo, navigateLogin} = useAuth();

  function handleClickUser() {
    navigateLogin();
  }

  return (
    <>
      <Head title={title} />
      <Page
        className={title ? `${title.replace(/\s|page/gi, '')}Page` : null}
        {...rest}
      >
        <Header>
          {showBackButton && (
            <BackButton onClick={() => navigate(-1)}>
              <RiArrowDropLeftLine />
            </BackButton>
          )}

          {title && <Title>{title}</Title>}

          {actionElement && <Actionbar>{actionElement}</Actionbar>}

          {showUser && (
            <UserButton onClick={handleClickUser}>
              <Avatar src={userInfo?.avatar} />
            </UserButton>
          )}
        </Header>

        <Main>{children}</Main>
      </Page>
    </>
  );
}
