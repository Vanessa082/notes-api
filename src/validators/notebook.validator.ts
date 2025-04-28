import { body, param } from "express-validator";

export const CreateNotebookValidator = [
  body('title').notEmpty().withMessage("Title sis required"),
  body('description').optional()
]

export const UpdateNotebookValidator = [
  body('title').optional().notEmpty().withMessage("Title sis required"),
  body('description').optional()
]

export const IdParamValidator = [
  param('id').isMongoId().withMessage('Invalid mongoId')
]