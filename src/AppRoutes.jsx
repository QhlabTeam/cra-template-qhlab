import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {lazyImport} from './utils/lazyImport';

const LoginPage = lazyImport(
  () => import('./features/auth/routes/LoginPage'),
  'LoginPage'
);
const NotFoundPage = lazyImport(
  () => import('./features/errors/routes/NotFoundPage'),
  'NotFoundPage'
);
const IntroPage = lazyImport(
  () => import('./features/intro/routes/IntroPage'),
  'IntroPage'
);
const PostsRoutes = lazyImport(
  () => import('./features/posts/routes'),
  'PostsRoutes'
);

export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route index element={<IntroPage />} />
        <Route element={<LoginPage />} path='auth/login' />
        <Route element={<PostsRoutes />} path='/posts/*' />
        <Route element={<NotFoundPage />} path='*' />
      </Routes>
    </Suspense>
  );
}
