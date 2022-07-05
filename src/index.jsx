import {ClickToComponent} from 'click-to-react-component';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';

import App from './App';
import {env} from './constants/env';
import {history} from './helpers/history';
import reportWebVitals from './reportWebVitals';

if (env.MSW_ENABLED) {
  const {worker} = require('./mocks/browser');
  worker.start();
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ClickToComponent />
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
