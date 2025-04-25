import { Router } from "express";
import { createNote, deleteAllNote, deleteNoteById, getAllNote, getNoteById, replaceNote, updateNote } from "../controllers/note";

const router = Router()

router.get('/:id', getNoteById)
router.get('/notes', getAllNote)
router.post('/', createNote)
router.put('/:id', replaceNote)
router.patch('/:id', updateNote)
router.delete('/:id', deleteNoteById)
router.delete('/notes', deleteAllNote)