import {Route, Routes} from 'react-router-dom';

import {HomePage} from './pages/HomePage';
import {NotFoundPage} from './pages/NotFoundPage';
import {PostDetailPage} from './pages/PostDetailPage';
import {PostsPage} from './pages/PostsPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<PostsPage />} path='/posts' />
      <Route element={<PostDetailPage />} path='/posts/:id' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
