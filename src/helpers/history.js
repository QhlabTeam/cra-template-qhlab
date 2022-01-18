import {createBrowserHistory, createHashHistory} from 'history';
import {isElectron} from './isElectron';

export const history = isElectron
  ? createHashHistory()
  : createBrowserHistory();
