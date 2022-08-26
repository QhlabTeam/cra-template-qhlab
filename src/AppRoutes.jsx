import {Route, Routes} from 'react-router-dom';

import {NotFoundPage} from './features/errors/routes/NotFoundPage';
import {IntroPage} from './features/intro/routes/IntroPage';
import {PostDetailPage} from './features/posts/routes/PostDetailPage';
import {PostFormPage} from './features/posts/routes/PostFormPage';
import {PostsPage} from './features/posts/routes/PostsPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<IntroPage />} />
      <Route element={<PostsPage />} path='/posts' />
      <Route element={<PostFormPage />} path='/posts/new' />
      <Route element={<PostDetailPage />} path='/posts/:id' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
