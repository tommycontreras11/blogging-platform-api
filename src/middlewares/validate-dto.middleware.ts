import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../helpers/status-code';

export const validate =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors,
      });
    }

    req.body = result.data;

    next();
  };
