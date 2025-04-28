import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { APIResponse } from '../interface/api-response';

export function validationErrorHandler(
  req: Request,
  res: Response<APIResponse<ReturnType<typeof Error>>>,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
    return;
  }

  res.status(400).json({
    message: 'Validation failed',
    status: 400,
    data:new Error,
  })
}
