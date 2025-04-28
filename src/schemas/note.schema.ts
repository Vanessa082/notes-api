import z from "zod";

export const CreateNoteSchema = z.object({
  title: z.string().min(4, 'Title is required'),
  content: z.string().min(4, 'Content is required'),
  noteBookId: z.string().optional(),
})

export const UpdateNoteSchema = CreateNoteSchema.partial();

export type CreateNoteDto = z.infer<typeof CreateNoteSchema>;
export type UpdateNoteDto = z.infer<typeof UpdateNoteSchema>;