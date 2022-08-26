import styled from '@emotion/styled';
import {RiArrowDropLeftLine} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';

import {Page as StyledPage} from '../elements/Page';

const Page = styled(StyledPage)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  margin-right: 10px;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.h1``;

const Actionbar = styled.div`
  margin-left: auto;
`;

const Main = styled.main``;

export function ContentLayout(
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
