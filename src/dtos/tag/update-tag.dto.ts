import z from "zod";

export const UpdateTagSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required").optional(),
  })
  .refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    {
      message: "At least one field must be provided for update",
    },
  );

export type UpdateTagDTO = z.infer<typeof UpdateTagSchema>;