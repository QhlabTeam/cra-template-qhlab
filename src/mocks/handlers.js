import {rest} from 'msw';

export const handlers = [
  // Handles a GET /example request
  rest.get('/example', null),

  // Handles a GET /example2 request with mock data
  rest.get('/example2', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({message: 'hello world'}));
  }),
];
