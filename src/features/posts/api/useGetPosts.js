import {stringifyUrl} from 'query-string';
import useSWR from 'swr';

import {env} from '../../../constants/env';

const URL = env.ENABLE_MSW
  ? '/posts'
  : 'https://jsonplaceholder.typicode.com/posts';

export function useGetPosts({query} = {}) {
  return useSWR(
    stringifyUrl({
      url: URL,
      query,
    })
  );
}
