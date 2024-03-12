import { prismaClient } from '@/application/database';
import type { AllMessagesResponse } from '@/types/message-type';

class MessageService {
  static async getAllMessages(take?: number, lastCursor?: string): Promise<AllMessagesResponse> {
    const lastCursorString = lastCursor && Buffer.from(lastCursor, 'base64').toString('ascii');

    const messages = await prismaClient.message.findMany({
      take: take ?? 10,
      ...(lastCursorString && {
        skip: 1, // Do not include the cursor itself in the query result.
        cursor: {
          id: lastCursorString,
        },
      }),
      orderBy: {
        createdAt: 'asc',
      },
    });

    if (messages.length === 0) {
      return {
        data: [],
        metaData: {
          cursor: null,
          hasNextPage: false,
        },
      };
    }

    const lastMessages = messages[messages.length - 1];
    const cursor = lastMessages.id;

    const nextPage = await prismaClient.message.findMany({
      take: take ?? 10,
      skip: 1,
      cursor: {
        id: cursor,
      },
    });

    const cursorBase64 = Buffer.from(cursor).toString('base64');

    return {
      data: messages,
      metaData: {
        cursor: cursorBase64,
        hasNextPage: nextPage.length > 0,
      },
    };
  }
}

export default MessageService;
