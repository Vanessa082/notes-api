import { Document } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  noteBookId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INotebook extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}