import useSWR from 'swr';

export function useGetPost({id}) {
  return useSWR(`/posts/${id}`);
}
