import {Route, Routes} from 'react-router-dom';

import {PostDetailPage} from './PostDetailPage';
import {PostFormPage} from './PostFormPage';
import {PostsPage} from './PostsPage';

export function PostsRoutes() {
  return (
    <Routes>
      <Route index element={<PostsPage />} />
      <Route element={<PostFormPage />} path='new' />
      <Route element={<PostDetailPage />} path=':id' />
    </Routes>
  );
}
