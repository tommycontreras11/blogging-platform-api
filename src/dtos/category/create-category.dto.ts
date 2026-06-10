import z from "zod";

export const CreateCategorySchema = z.object({
    name: z.coerce.string().min(1, "Name is required").max(50, "Name must be at most 50 characters")
})

export type CreateCategoryDTO = z.infer<typeof CreateCategorySchema>