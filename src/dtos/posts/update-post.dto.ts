import z from "zod";

export const UpdatePostSchema = z.object({
    title: z.coerce.string().trim().optional(),
    content: z.coerce.string().trim().optional(),
    category: z.coerce.string().optional(),
    tags: z.coerce.string().array().optional()
    
}).refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    {
      message: 'At least one field must be provided',
    }
  );

export type UpdatePostDTO = z.infer<typeof UpdatePostSchema>