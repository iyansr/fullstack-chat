import type { Request, Response, NextFunction } from 'express';

class ChatController {
  static async getAllChat(req: Request, res: Response, next: NextFunction) {
    return res.json({
      message: 'Work!!',
    });
  }
}

export default ChatController;
