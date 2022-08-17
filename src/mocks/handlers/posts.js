import {rest} from 'msw';

import {db} from '../db';

export const postsHandlers = [
  rest.get('/posts', (req, res, ctx) => {
    const limit = req.url.searchParams.get('_limit');
    const page = req.url.searchParams.get('_page');

    const result = db.post.findMany({
      take: limit,
      skip: page ? page - 1 : null,
    });

    return res(ctx.delay(), ctx.json(result));
  }),
];
