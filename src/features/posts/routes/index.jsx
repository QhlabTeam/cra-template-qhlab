import {Route, Routes} from 'react-router-dom';

import {NewPostPage} from './NewPostPage';
import {PostDetailPage} from './PostDetailPage';
import {PostsPage} from './PostsPage';

export function PostsRoutes() {
  return (
    <Routes>
      <Route index element={<PostsPage />} />
      <Route element={<NewPostPage />} path='new' />
      <Route element={<PostDetailPage />} path=':id' />
    </Routes>
  );
}
