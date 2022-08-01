import {Global as GlobalStyle} from '@emotion/react';
import {ClickToComponent} from 'click-to-react-component';
import React from 'react';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {SWRConfig} from 'swr';

import {electronOnly, layout, rebase, themeing} from './lib/global.css';
import {history} from './lib/history';
import {request} from './lib/request';

export function AppProviders({children}) {
  return (
    <>
      {/* Providers */}
      <SWRConfig value={{fetcher: request.get}}>
        <HistoryRouter history={history}>{children}</HistoryRouter>
      </SWRConfig>

      {/* option/alt + click ui to open source code  */}
      <ClickToComponent />

      {/* Register your global styles */}
      <GlobalStyle styles={[rebase, layout, themeing, electronOnly]} />
    </>
  );
}
