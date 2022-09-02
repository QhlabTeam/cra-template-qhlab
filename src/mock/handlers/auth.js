import {faker} from '@faker-js/faker';
import jwt from 'jsonwebtoken';
import {rest} from 'msw';
import {nanoid} from 'nanoid';

import {CONFIG} from '../../constants/config';
import {JWT_SECRET} from '../constants';
import {db, persistDb} from '../db';

const invalidUsername = (username) => /\s/.test(username);
const invalidPassword = (password) => /\s/.test(password);

export const authHandlers = [
  rest.post(`${CONFIG.apiUrl}/api/auth/register`, (req, res, ctx) => {
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

      if (invalidUsername(username) || invalidPassword(password)) {
        throw new Error('Invalid username or password');
      }

      // Create new user
      const user = db.user.create({
        id: nanoid(),
        avatar: faker.image.avatar(),
        username,
        password,
      });
      const {password: __omitPassword, ...userInfo} = user;
      const token = jwt.sign(userInfo, JWT_SECRET);

      persistDb('user');

      return res(ctx.delay(2000), ctx.json({userInfo, token}));
    } catch (error) {
      return res(
        ctx.delay(2000),
        ctx.status(400),
        ctx.json({
          message: error?.message ?? 'Server Error',
        })
      );
    }
  }),

  rest.post(`${CONFIG.apiUrl}/api/auth/login`, (req, res, ctx) => {
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
      if (
        !user ||
        password !== user.password ||
        invalidUsername(username) ||
        invalidPassword(password)
      ) {
        throw new Error('Invalid username or password');
      }

      // Sign
      const {password: __omitPassword, ...userInfo} = user;
      const token = jwt.sign(userInfo, JWT_SECRET);

      return res(ctx.delay(2000), ctx.json({userInfo, token}));
    } catch (error) {
      return res(
        ctx.delay(2000),
        ctx.status(400),
        ctx.json({
          message: error?.message ?? 'Server Error',
        })
      );
    }
  }),
];
