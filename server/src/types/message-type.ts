import type { Message } from '@prisma/client';

export type AllMessagesResponse = {
  data: Message[];
  metaData: {
    cursor: string | null;
    hasNextPage: boolean;
  };
};

export type MessageQuery = {
  take?: number;
  cursor?: string;
};
