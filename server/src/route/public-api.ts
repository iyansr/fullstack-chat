import express from 'express';

import MessageController from '@/controller/message-controller';

export const publicRouter = express.Router();

publicRouter.get('/', (_, res) => {
  return res.status(200).json({ message: 'API is working' });
});

publicRouter.get('/messages', MessageController.getAllMessages);
