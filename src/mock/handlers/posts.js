import {faker} from '@faker-js/faker';
import {rest} from 'msw';
import {nanoid} from 'nanoid';

import {CONFIG} from '../../constants/config';
import {HTTP_ERRORS} from '../constants';
import {db, persistDb} from '../db';
import {requireAuth} from '../utils';

export const postsHandlers = [
  rest.get(`${CONFIG.apiUrl}/api/posts`, (req, res, ctx) => {
    const limit = req.url.searchParams.get('_limit') || 9;
    const page = req.url.searchParams.get('_page') || 1;

    const skip = (page - 1) * limit;

    const result = db.post.findMany({
      take: limit,
      skip,
    });

    return res(ctx.delay(), ctx.json(result));
  }),

  rest.post(`${CONFIG.apiUrl}/api/posts`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      const {title, body} = req.body;
      const result = db.post.create({
        id: nanoid(),
        title,
        body,
        cover: `${faker.image.city(600, 400)}?lock=${faker.random.numeric(5)}`,
        createdAt: faker.date.recent(7),
        author: user,
      });
      persistDb('post');
      return res(ctx.delay(2000), ctx.json(result));
    } catch (error) {
      const isUnauthorized = [
        HTTP_ERRORS['401_NO_TOKEN'],
        HTTP_ERRORS['401_UNAUTHORIZED'],
      ].includes(error);

      return res(
        ctx.delay(2000),
        ctx.status(isUnauthorized ? 401 : 500),
        ctx.json({
          message: error?.message ?? HTTP_ERRORS['500_SERVER_ERROR'].message,
        })
      );
    }
  }),

  rest.get(`${CONFIG.apiUrl}/api/posts/:postId`, (req, res, ctx) => {
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
