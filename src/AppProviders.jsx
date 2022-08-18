import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {SWRConfig} from 'swr';

import {history} from './lib/history';
import {request} from './lib/request';

export function AppProviders({children}) {
  return (
    <SWRConfig value={{fetcher: request.get}}>
      <HistoryRouter history={history}>{children}</HistoryRouter>
    </SWRConfig>
  );
}
