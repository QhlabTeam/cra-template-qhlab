import {request} from '../../../lib/request';

export function login(data) {
  return request.post('/api/auth/login', data);
}
