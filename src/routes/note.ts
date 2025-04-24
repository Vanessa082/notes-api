import { Router } from "express";
import { createNote, getAllNote, getNoteById, updateNote } from "../controllers/note";

const router = Router()

router.get('/:id', getNoteById)
router.get('/allnote', getAllNote)
router.post('/', createNote)
router.put('/:id', updateNote)