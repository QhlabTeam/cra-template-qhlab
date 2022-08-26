import {request} from '../../../lib/request';

export function register(data) {
  return request.post('/api/auth/register', data);
}
