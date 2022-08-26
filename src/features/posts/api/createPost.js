import {request} from '../../../lib/request';

export function createPost(data) {
  return request.post('/posts', data);
}
