import {stringifyUrl} from 'query-string';
import useSWR from 'swr';

export function useGetPosts({query} = {}) {
  return useSWR(
    stringifyUrl({
      url: '/api/posts',
      query,
    })
  );
}
