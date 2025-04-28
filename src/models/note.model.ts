import mongoose from "mongoose";
import { INote } from "../interface/note";

export const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  noteBookId:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notebook',
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export const Note = mongoose.model<INote>('Note', noteSchema);