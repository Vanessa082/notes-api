import { Router } from "express";
import { createNote, deleteAllNote, deleteNoteById, getAllNote, getNoteById, updateNote } from "../controllers/note";


// Method | Path | Description
// GET | /notes | List all notes (with paging/filter)
// POST | /notes | Create a new note
// GET | /notes/:id | Fetch a single note by ID
// PUT | /notes/:id | Replace all fields of a note
// PATCH | /notes/:id | Update one or more fields
// DELETE | /notes/:id | Delete a note

const router = Router()

router.get('/:id', getNoteById)
router.get('/notes', getAllNote)
router.post('/', createNote)
router.put('/:id', replaceNote)
router.patch('/:id', updateNote)
router.delete('/:id', deleteNoteById)
router.delete('/notes', deleteAllNote)