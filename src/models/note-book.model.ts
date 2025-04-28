import mongoose from "mongoose";
import { INotebook } from "../interface/note";

const noteBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}
)

export const NoteBook = mongoose.model<INotebook>('notebook', noteBookSchema)