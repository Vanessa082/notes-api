import { Router } from "express";
import { createNote, deleteAllNote, deleteNoteById, getAllNote, getNoteById, replaceNote, updateNote } from "../controllers/note";
import { validationErrorHandler } from "../middlewares/validation-error-handler";
import { CreateNoteValidator, IdParamValidator, UpdateNoteValidator } from "../validators/note.validator";

const router = Router();

router.get('/:id', IdParamValidator, validationErrorHandler, getNoteById);
router.get('/', getAllNote);
router.post('/', CreateNoteValidator, validationErrorHandler, createNote);
router.put('/:id', UpdateNoteValidator, validationErrorHandler, replaceNote);
router.patch('/:id', UpdateNoteValidator, validationErrorHandler, updateNote);
router.delete('/:id', IdParamValidator, validationErrorHandler, deleteNoteById);
router.delete('/', deleteAllNote);

export default router;
