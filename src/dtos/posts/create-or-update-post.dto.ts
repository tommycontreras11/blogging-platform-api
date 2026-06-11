import z from "zod";

export const CreateOrUpdatePostSchema = z.object({
    title: z.coerce.string().trim().min(1, "Title is required").max(100, "Title must be at most 50 characters"),
    content: z.coerce.string().trim().min(1, "Content is required"),
    category: z.coerce.string().min(1, "Category is required"),
    tags: z.coerce.string().array().min(1, "At least one tag must be selected.")
})

export type CreateOrUpdatePostDTO = z.infer<typeof CreateOrUpdatePostSchema>