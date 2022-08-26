import {faker} from '@faker-js/faker';
import * as jose from 'jose';
import {rest} from 'msw';
import {nanoid} from 'nanoid';

import {env} from '../../constants/env';
import {db} from '../db';

const JWT_SECRET = '123456';

export const authHandlers = [
  rest.post(`${env.API_URL}/api/auth/register`, async (req, res, ctx) => {
    try {
      const {username, password} = req.body;

      // Detect existing user
      const existingUser = db.user.findFirst({
        where: {
          username: {
            equals: username,
          },
        },
      });
      if (existingUser) {
        throw new Error('The user already exists');
      }

      // Create new user
      const user = db.user.create({
        id: nanoid(),
        avatar: faker.image.avatar(),
        username,
        password,
      });
      const {password: __omitPassword, ...userInfo} = user;
      const token = await new jose.SignJWT(userInfo).sign(JWT_SECRET);

      return res(ctx.delay(2000), ctx.json({userInfo, token}));
    } catch (error) {
      return res(
        ctx.delay(),
        ctx.status(400),
        ctx.json({
          message: error?.message ?? 'Server Error',
        })
      );
    }
  }),

  rest.post(`${env.API_URL}/api/auth/login`, async (req, res, ctx) => {
    try {
      const {username, password} = req.body;

      // Check if user exists
      const user = db.user.findFirst({
        where: {
          username: {
            equals: username,
          },
        },
      });
      if (!user || password !== user.password) {
        throw new Error('Invalid username or password');
      }

      // Sign
      const {password: __omitPassword, ...userInfo} = user;
      const token = await new jose.SignJWT(userInfo).sign(JWT_SECRET);

      return res(ctx.delay(2000), ctx.json({userInfo, token}));
    } catch (error) {
      return res(
        ctx.delay(),
        ctx.status(400),
        ctx.json({
          message: error?.message ?? 'Server Error',
        })
      );
    }
  }),
];
