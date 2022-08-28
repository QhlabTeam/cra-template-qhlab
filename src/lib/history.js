import {Action, createBrowserHistory, createHashHistory} from 'history';

import {isElectron} from './isElectron';

export const history = isElectron
  ? createHashHistory()
  : createBrowserHistory();

// Handle route change
history.listen(({action}) => {
  if (action === Action.Push) {
    window.scrollTo({top: 0});
  }
});
