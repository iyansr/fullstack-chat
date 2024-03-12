import express from 'express';

import { errorMiddleware } from '@/middleware/error-middleware';
import { publicRouter } from '@/route/public-api';

export const api = express();

api.use(express.json());
api.use(errorMiddleware);
api.use('/v1', publicRouter);
