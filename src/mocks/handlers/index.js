import {exampleHandlers} from './examples';
import {postsHandlers} from './posts';

export const handlers = [
  // Extend your handlers array
  ...exampleHandlers,
  ...postsHandlers,
];
