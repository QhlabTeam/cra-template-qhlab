import {ErrorBoundary} from 'react-error-boundary';
import {HelmetProvider} from 'react-helmet-async';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {SWRConfig} from 'swr';

import {ErrorFallback} from './components/ErrorFallback';
import {Notifications} from './components/Notifications';
import {GlobalStyles} from './GlobalStyles';
import {history} from './lib/history';
import {request} from './lib/request';

const DevClickToComponent =
  process.env.NODE_ENV === 'development'
    ? require('click-to-react-component').ClickToComponent
    : () => null;

export function AppProviders({children}) {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <HelmetProvider>
        <SWRConfig value={{fetcher: request.get}}>
          <HistoryRouter history={history}>{children}</HistoryRouter>

          <GlobalStyles />
          <Notifications />
          <DevClickToComponent />
        </SWRConfig>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
