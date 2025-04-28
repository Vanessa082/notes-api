import { Request, Response } from "express"
import { CreateNotebookDto, UpdateNotebookDto } from "../schemas/note-book.schemas"
import { APIResponse } from "../interface/api-response"
import { INotebook } from "../interface/note"
import { NoteBook } from "../models/note-book.model"

export const getNoteBookById = async (req: Request<{ id: string }>, res: Response<APIResponse<INotebook | null>>) => {
  try {
    const { id } = req.params;
    const notebook = await NoteBook.findById(id);
    if(!notebook){
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.status(200).json({
      message: "Success getting notebook",
      data: notebook,
      status: 200
    })
  } catch (error) {
    console.log("Error getting notebook by id", error)
  }
}

export const createNoteBook = async (req: Request<CreateNotebookDto>, res: Response<APIResponse<INotebook>>) => {
  try {
    const notebook = await NoteBook.create(req.body)
    res.status(200).json({
      message: "Notebook successfully created",
      data: notebook,
      status: 200
    })
    return;
  } catch (error) {
    console.log("Failed creating Notebook", error)
  }
}

export const getANoteBooks = async (req: Request, res: Response<APIResponse<INotebook[]>>) => {
  try {
    const notebooks = await NoteBook.find();
    res.json({ message: 'All notes', data: notebooks, status: 200 });
    return;
  } catch (error) {
    console.log("Error getting notes", error)
  };
};

export const updateNotebook = async (
  req: Request<{ id: string }, UpdateNotebookDto>,
  res: Response<APIResponse<INotebook | null>>
) => {
  try {
    const { id } = req.params;
    const updated = await NoteBook.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.json({ message: 'Updated notebook', data: updated, status: 200 });
  } catch (error) {
    console.log("Error updating Notebook", error)
  }
};

export const deleteNotebookById = async (
  req: Request<{ id: string }>,
  res: Response<APIResponse<INotebook | null>>
) => {
  try {
    const { id } = req.params;
    const deleted = await NoteBook.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Not found', data: null, status: 404 });
      return;
    }
    res.json({ message: 'Deleted notebook', data: deleted, status: 200 });
  } catch (error) {
    console.log("Error deleting notebook", error);
  }
};
