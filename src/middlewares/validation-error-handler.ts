// src/middlewares/validation-error-handler.ts
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { APIResponse } from '../interface/api-response';

export function validationErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const errors = validationResult(req);

  // If there are no errors, pass control on:
  if (errors.isEmpty()) {
    next();
    return;
  }

  // Otherwise send a 400 and stop—this function itself returns void:
  res.status(400).json({
    message: 'Validation failed',
    status: 400,
    data: errors.array(),
  } as APIResponse<ReturnType<typeof errors.array>>);
}
