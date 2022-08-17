import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {setupMocks} from './mocks/setupMocks';
import reportWebVitals from './reportWebVitals';

// If you want to enable msw mocks, pass an env:
// REACT_APP_ENABLE_MSW=true when you start the app
setupMocks();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
