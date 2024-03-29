import styled from '@emotion/styled';

import {GlobalStyles} from '../GlobalStyles';

const Container = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  pre {
    padding: 20px;
    white-space: pre-wrap;
    text-align: center;
  }

  button {
    text-decoration: underline;
    width: 80px;
  }
`;

/**
 * @param {import('react-error-boundary').FallbackProps}
 *  */
export function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <Container>
      <GlobalStyles />
      <pre>
        {error ? `Error: ${error.message}` : 'Ooops, something went wrong :('}
      </pre>
      <button onClick={resetErrorBoundary}>Retry</button>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </Container>
  );
}
