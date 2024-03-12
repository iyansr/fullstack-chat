import type { GroupedMessagesByTime, Message } from '../types/message';

export const groupMessagesByTime = (messages: Message[]): GroupedMessagesByTime[] => {
  const groupedMessages: { [key: string]: Message[] } = {};

  messages.forEach((message) => {
    const createdAt = new Date(message.createdAt);
    const date = createdAt.toISOString().substring(0, 16);
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });

  const result = Object.keys(groupedMessages).map((date) => ({
    date,
    data: groupedMessages[date],
  }));

  return result;
};
