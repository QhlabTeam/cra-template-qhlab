import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {env} from './constants/env';
import reportWebVitals from './reportWebVitals';

if (env.MSW_ENABLED) {
  const {worker} = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
