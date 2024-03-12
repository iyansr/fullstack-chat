export type Message = {
  id: string;
  content: string;
  createdAt: string;
  senderId: number;
  receiverId: number;
};

export type GroupedMessagesByTime = {
  date: string;
  data: Message[];
};
