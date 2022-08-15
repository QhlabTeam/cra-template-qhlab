import {Route, Routes} from 'react-router-dom';

import {NotFoundPage} from './pages/errors/NotFoundPage';
import {PostDetailPage} from './pages/posts/PostDetailPage';
import {PostsPage} from './pages/posts/PostsPage';
import {WelcomePage} from './pages/WelcomePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route element={<PostsPage />} path='/posts' />
      <Route element={<PostDetailPage />} path='/posts/:id' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
