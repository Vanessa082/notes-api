export interface Note extends Document {
  title: string;
  content: string;
  noteBook: string;
  createdAt: Date;
  updatedAt: Date;
}