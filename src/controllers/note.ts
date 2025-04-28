import { Request, Response } from "express"
import { APIResponse } from "../interface/api-response"
import { CreateNoteDto, UpdateNoteDto } from "../schemas/note.schema"
import { Note } from "../models/note.model"
import { INote } from "../interface/note"

export const createNote = async (req: Request<CreateNoteDto>, res: Response<APIResponse<INote>>) => {
  try {
    const note = await Note.create(req.body)
    res.status(200).json({
      message: "Note Successfully created",
      data: note,
      status: 200
    })
    return;
  } catch (error) {
    console.log("Error creating note", error)
    return;
  }
}

export const getNoteById = async (
  req: Request<{ id: string }>,
  res: Response<APIResponse<INote | null>>
) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.json({ message: 'Fetched note', data: note, status: 200 });
  } catch (error) {
    console.log("Error getting note", error);
    return;
  }
};

export const getAllNote = async (req: Request, res: Response<APIResponse<INote[]>>) => {
  try {
    const notes = await Note.find();
    res.json({ message: 'All notes', data: notes, status: 200 });
    return;
  } catch (error) {
    console.log("Error getting notes", error)
  };
};

export const replaceNote = async (
  req: Request<{ id: string }, CreateNoteDto>,
  res: Response<APIResponse<INote | null>>
) => {
  try {
    const { id } = req.params;
    const replaced = await Note.findOneAndReplace({ _id: id }, req.body, { new: true });
    if (!replaced) {
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.json({ message: 'Replaced note', data: replaced, status: 200 });
  } catch (error) {
    console.log("Error replacing note", error);
  }
};

export const updateNote = async (
  req: Request<{ id: string }, UpdateNoteDto>,
  res: Response<APIResponse<INote | null>>
) => {
  try {
    const { id } = req.params;
    const updated = await Note.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.json({ message: 'Updated note', data: updated, status: 200 });
  } catch (error) {
    console.log("Error updating Note", error)
  }
};

export const deleteNoteById = async (
  req: Request<{ id: string }>,
  res: Response<APIResponse<INote | null>>
) => {
  try {
    const { id } = req.params;
    const deleted = await Note.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.json({ message: 'Deleted note', data: deleted, status: 200 });
  } catch (error) {
    console.log("Error deleting note", error);
  }
};

export const deleteAllNote = async (req: Request, res: Response<APIResponse>) => {
  try {
    await Note.deleteMany();
    res.json({ message: 'All notes deleted', data: null, status: 200 });
  } catch (error) {
    console.log("Error deleting all notes", error);
  }
};
