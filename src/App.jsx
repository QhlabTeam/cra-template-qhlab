import {ClickToComponent} from 'click-to-react-component';

import {AppProviders} from './AppProviders';
import {AppRoutes} from './AppRoutes';
import {GlobalStyles} from './GlobalStyles';

function App() {
  return (
    <AppProviders>
      <AppRoutes />
      <GlobalStyles />
      <ClickToComponent />
    </AppProviders>
  );
}

export default App;
