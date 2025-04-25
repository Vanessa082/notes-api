import { Router } from "express";
import { createNoteBook, deleteNoteBookById, getNoteBookById, getNoteBooks, updateNoteBookById } from "../controllers/note-book";

const router = Router();

router.get('/:id', getNoteBookById)
router.post('/', createNoteBook)
router.get('/notebooks', getNoteBooks)
router.put('/:id', updateNoteBookById)
router.delete('/:id', deleteNoteBookById)