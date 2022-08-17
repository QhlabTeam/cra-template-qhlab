import {rest} from 'msw';
import {nanoid} from 'nanoid';

import {db} from '../db';

const userId = nanoid();

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

  rest.post('/posts', (req, res, ctx) => {
    const {title, body} = req.body;

    db.post.create({
      id: nanoid(),
      title,
      body,
      userId,
    });

    return res(ctx.status(200), ctx.delay(2000));
  }),
];
