import { Request, Response } from "express"
import { APIResponse } from "../interface/api-response"
import { NoteDocument } from "../models/note"
import { Note } from "../models/note-book"

export const createNote = async (req: Request, res: Response<APIResponse<NoteDocument>>) => {
  try {
    const note = await Note.create()
    res.status(200).json({
      message: "Note Successfully created",
      data: note,
      status: 200
    })
  } catch (error) {
    console.log("Error creating note", error)
  }
}

export const replaceNote = () => {
  try {

  } catch (error) {

  }
}

export const getNoteById = () => {
  try {

  } catch (error) {

  }
}

export const getAllNote = () => {
  try {

  } catch (error) {

  }
}

export const deleteNoteById = () => {
  try {

  } catch (error) {
    error
  }
}

export const deleteAllNote = () => {
  try {

  } catch (error) {
    error
  }
}


export const updateNote = () => {
  try {

  } catch (error) {

  }
}