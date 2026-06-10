import z from "zod";

export const CreatePostSchema = z.object({
    title: z.coerce.string().trim().min(1, "Title is required").max(100, "Title must be at most 50 characters"),
    content: z.coerce.string().trim().min(1, "Content is required"),
    categoryUuid: z.coerce.string().trim().min(1, "Category is required"),
    tagsUuids: z.coerce.string().array().min(1, "At least one tag must be selected.")
})

export type CreatePostDTO = z.infer<typeof CreatePostSchema>