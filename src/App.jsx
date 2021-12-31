import {Global as GlobalStyle} from '@emotion/react';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from './containers/HomePage';
import {NotFoundPage} from './containers/NotFoundPage';
import {rebase} from './global.css';

function App() {
  return (
    <>
      {/* 挂载路由 */}
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<NotFoundPage />} path='*' />
        </Routes>
      </Router>

      {/* 挂载全局样式 */}
      <GlobalStyle styles={[rebase]} />
    </>
  );
}

export default App;
