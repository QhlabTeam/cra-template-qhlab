import {Route, Routes} from 'react-router-dom';

import {NotFoundPage} from './pages/errors/NotFoundPage';
import {NewPostPage} from './pages/NewPostPage';
import {PostDetailPage} from './pages/PostDetailPage';
import {PostsPage} from './pages/PostsPage';
import {WelcomePage} from './pages/WelcomePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route element={<PostsPage />} path='/posts' />
      <Route element={<NewPostPage />} path='/posts/new' />
      <Route element={<PostDetailPage />} path='/posts/:id' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
