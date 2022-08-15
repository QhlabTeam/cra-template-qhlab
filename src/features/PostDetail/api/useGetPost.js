import useSWR from 'swr';

export function useGetPost({id}) {
  return useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
