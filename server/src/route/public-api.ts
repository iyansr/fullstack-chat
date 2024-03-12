import express from 'express';

export const publicRouter = express.Router();

publicRouter.get('/', (_, res) => {
  return res.status(200).json({ message: 'API is working' });
});
