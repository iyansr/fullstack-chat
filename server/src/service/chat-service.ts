import { prismaClient } from '@/application/database';

class ChatService {
  static async getAllMessages() {
    const messages = await prismaClient.message.findMany();
    return messages;
  }
}

export default ChatService;
