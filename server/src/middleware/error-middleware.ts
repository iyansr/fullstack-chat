import type { Response, Request, NextFunction } from 'express';

import { ResponseError } from '@/error/response-error';

export const errorMiddleware = async (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof ResponseError) {
    res.status(error.status).json({
      errors: error.message,
    });
  } else {
    res.status(500).json({
      errors: error.message,
    });
  }
};
