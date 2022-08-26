import {RiArrowDropLeftLine} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';

import {Page, Header, BackButton, Title, Actionbar, Main} from './styles';

export function Layout(
  /** @type {import('./types').ContentLayoutProps} */
  {title, actionElement, showBackButton, children, ...rest}
) {
  const navigate = useNavigate();

  return (
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
      </Header>

      <Main>{children}</Main>
    </Page>
  );
}
