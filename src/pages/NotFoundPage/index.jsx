import {css} from '@emotion/react';
import {Link} from 'react-router-dom';

import {Page} from '../../components/Page';

export function NotFoundPage() {
  return (
    <Page
      className='NotFoundPage'
      css={{justifyContent: 'center', alignItems: 'center'}}
    >
      <h1>Not Found</h1>

      <Link
        replace
        css={css`
          background-color: whitesmoke;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 14px;
          margin-top: 8px;
        `}
        to='/'
      >
        Return Home
      </Link>
    </Page>
  );
}
