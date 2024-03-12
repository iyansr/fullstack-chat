import express from 'express';

import { publicRouter } from '@/route/public-api';

export const api = express();
api.use(express.json());
api.use('/v1', publicRouter);
