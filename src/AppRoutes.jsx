import {Route, Routes} from 'react-router-dom';

import {LoginPage} from './features/auth/routes/LoginPage';
import {NotFoundPage} from './features/errors/routes/NotFoundPage';
import {IntroPage} from './features/intro/routes/IntroPage';
import {PostsRoutes} from './features/posts/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<IntroPage />} />
      <Route element={<LoginPage />} path='auth/login' />
      <Route element={<PostsRoutes />} path='/posts/*' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
