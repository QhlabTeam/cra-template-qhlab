import React from 'react';
import {createRoot} from 'react-dom/client';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';

import App from './App';
import {history} from './helpers/history';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  const {worker} = require('./mocks/browser');
  worker.start();
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
