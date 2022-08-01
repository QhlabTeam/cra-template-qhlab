import {Route, Routes} from 'react-router-dom';

import {HomePage} from './pages/HomePage';
import {NotFoundPage} from './pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
