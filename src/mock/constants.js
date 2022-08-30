export const JWT_SECRET = '123456';

export const HTTP_ERRORS = {
  '400_USER_EXISTS': new Error('The user already exists'),
  '400_INVALID_USER': new Error('Invalid username or password'),
  '401_NO_TOKEN': new Error('No authorization token provided'),
  '401_UNAUTHORIZED': new Error('Unauthorized'),
  '500_SERVER_ERROR': new Error('Server Error'),
};
