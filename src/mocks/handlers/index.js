import {authHandlers} from './auth';
import {postsHandlers} from './posts';

export const handlers = [
  // Extend your handlers array
  ...authHandlers,
  ...postsHandlers,
];
