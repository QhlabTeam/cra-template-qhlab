import jwt from 'jsonwebtoken';

import {HTTP_ERRORS, JWT_SECRET} from './constants';
import {db} from './db';

/**
 * @param {import('msw').RestRequest} request
 */
export function requireAuth(request) {
  const encodedToken = request.headers.get('authorization');

  if (!encodedToken) {
    throw HTTP_ERRORS['401_NO_TOKEN'];
  }

  const decodedToken = jwt.verify(encodedToken, JWT_SECRET);
  const user = db.user.findFirst({
    where: {
      id: {
        equals: decodedToken.id,
      },
    },
  });

  if (!user) {
    throw HTTP_ERRORS['401_UNAUTHORIZED'];
  }

  const {password: __omitPassword, ...userInfo} = user;

  return userInfo;
}
