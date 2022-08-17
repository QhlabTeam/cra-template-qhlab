import {rest} from 'msw';

export const exampleHandlers = [
  // Handles a GET /example request
  rest.get('/example', (req, res, ctx) => {
    return res(ctx.delay(), ctx.text('Hello World'));
  }),

  // Handles a GET /example2 request with mock data
  rest.get('/example2', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({message: 'hello world'}));
  }),
];
