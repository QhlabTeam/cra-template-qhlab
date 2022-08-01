import {Global as GlobalStyle} from '@emotion/react';
import {ClickToComponent} from 'click-to-react-component';
import React from 'react';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';

import {electronOnly, layout, rebase, themeing} from './lib/global.css';
import {history} from './lib/history';

export function AppProviders({children}) {
  return (
    <>
      {/* Providers */}
      <HistoryRouter history={history}>{children}</HistoryRouter>

      {/* option/alt + click ui to open source code  */}
      <ClickToComponent />

      {/* Register your global styles */}
      <GlobalStyle styles={[rebase, layout, themeing, electronOnly]} />
    </>
  );
}
