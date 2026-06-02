import z from "zod";

export const CreateTagSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(50, "Name must be at most 50 characters"),
});

export type CreateTagDTO = z.infer<typeof CreateTagSchema>;