import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import {setupMocks} from './mocks/setupMocks';
import reportWebVitals from './reportWebVitals';

// If you want to enable msw mocks, pass an env:
// REACT_APP_ENABLE_MSW=true when you start the app
setupMocks();

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
