import z from "zod";

export const CreateNotebookSchema = z.object({
  title: z.string().min(4, 'Title is required'),
  description: z.string().min(4, 'Content is required').optional(),
})

export const UpdateNotebookSchema = CreateNotebookSchema.partial();

export type CreateNotebookDto = z.infer<typeof CreateNotebookSchema>;
export type UpdateNotebookDto = z.infer<typeof UpdateNotebookSchema>;