import {Global as GlobalStyle} from '@emotion/react';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './containers/HomePage';
import {NotFoundPage} from './containers/NotFoundPage';
import {rebase} from './global.css';

function App() {
  return (
    <>
      {/* register your routes */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<NotFoundPage />} path='*' />
      </Routes>

      {/* register your global styles */}
      <GlobalStyle styles={[rebase]} />
    </>
  );
}

export default App;
