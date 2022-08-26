import {Route, Routes} from 'react-router-dom';

import {NotFoundPage} from './features/errors/routes/NotFoundPage';
import {IntroPage} from './features/intro/routes/IntroPage';
import {PostsRoutes} from './features/posts/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<IntroPage />} />
      <Route element={<PostsRoutes />} path='/posts/*' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
