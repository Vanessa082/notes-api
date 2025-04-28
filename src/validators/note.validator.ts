import { body, param } from "express-validator";

export const CreateNoteValidator = [
  body('title').notEmpty().withMessage("Title is required"),
  body('content').notEmpty().withMessage("Content is required"),
  body('noteBookId').optional().isMongoId().withMessage("Invalid mongoId")
];

export const UpdateNoteValidator = [
  param('id').isMongoId().withMessage('Invalid Note ID'),
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('content').optional().notEmpty().withMessage('Content cannot be empty'),
  body('noteBookId').optional().isMongoId().withMessage('Invalid notebook'),
];

export const IdParamValidator = [
  param('id').isMongoId().withMessage('Invalid mongoId'),
];