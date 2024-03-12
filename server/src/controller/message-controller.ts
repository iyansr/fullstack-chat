import type { Request, Response, NextFunction } from 'express';

import ChatService from '@/service/message-service';
import type { MessageQuery } from '@/types/message-type';

class MessageController {
  static async getAllMessages(
    req: Request<object, object, object, MessageQuery>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const take = Number(req.query.take ?? 10);
      const cursor = req.query.cursor;

      const result = await ChatService.getAllMessages(take, cursor);

      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default MessageController;
