import useSWR from 'swr';

export function useGetUserInfo({seed = 0}) {
  return useSWR(`https://randomuser.me/api/?seed=${seed}`);
}
