import {faker} from '@faker-js/faker';
import {rest} from 'msw';
import {nanoid} from 'nanoid';

import {ENV} from '../../constants/env';
import {db} from '../db';

export const postsHandlers = [
  rest.get(`${ENV.apiUrl}/api/posts`, (req, res, ctx) => {
    const limit = req.url.searchParams.get('_limit') || 9;
    const page = req.url.searchParams.get('_page') || 1;

    const skip = (page - 1) * limit;

    const result = db.post.findMany({
      take: limit,
      skip,
    });

    return res(ctx.delay(), ctx.json(result));
  }),

  rest.post(`${ENV.apiUrl}/api/posts`, (req, res, ctx) => {
    const {title, body} = req.body;

    const user = db.user.findFirst({});

    db.post.create({
      id: nanoid(),
      title,
      body,
      cover: `${faker.image.city(600, 400)}?lock=${faker.random.numeric(5)}`,
      createdAt: faker.date.recent(7),
      author: user,
    });

    return res(ctx.status(200), ctx.delay(2000));
  }),

  rest.get(`${ENV.apiUrl}/api/posts/:postId`, (req, res, ctx) => {
    const {postId} = req.params;
    const result = db.post.findFirst({
      where: {
        id: {
          equals: postId,
        },
      },
    });
    return res(ctx.json(result), ctx.delay());
  }),
];
