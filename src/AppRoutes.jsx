import {Route, Routes} from 'react-router-dom';

import {NotFoundPage} from './pages/NotFoundPage';
import {PostDetailPage} from './pages/PostDetailPage';
import {PostsPage} from './pages/PostsPage';
import {WelcomPage} from './pages/WelcomPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<WelcomPage />} />
      <Route element={<PostsPage />} path='/posts' />
      <Route element={<PostDetailPage />} path='/posts/:id' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
