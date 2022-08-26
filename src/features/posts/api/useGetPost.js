import useSWR from 'swr';

export function useGetPost({id}) {
  return useSWR(`/api/posts/${id}`);
}
