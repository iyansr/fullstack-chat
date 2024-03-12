import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/modules/shared/libs/axios';
import type { Message } from '@/modules/shared/types/message';

type Params = {
  cursor?: string;
};

type Result = {
  data: Message[];
  metaData: {
    cursor: string | null;
    hasNextPage: boolean;
  };
};

const fetchMessages = async ({ cursor = '' }: Params) => {
  const result = await api.request<Result>({
    method: 'GET',
    url: '/messages',
    params: {
      cursor,
    },
  });

  return result.data;
};

const useQueryMessages = () => {
  return useInfiniteQuery({
    queryKey: ['messages'],
    initialPageParam: '',
    queryFn: ({ pageParam }) => fetchMessages({ cursor: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage?.metaData.cursor;
    },
    select: (data) => {
      return data.pages.flatMap((page) => page.data);
    },
  });
};

export default useQueryMessages;
