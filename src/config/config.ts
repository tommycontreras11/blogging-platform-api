import dotenv from "dotenv"
import { z } from "zod"

dotenv.config({
    quiet: true
})

const envSchema = z.object({
    PORT: z.coerce.number(),
    NODE_ENV: z.enum(["dev", "prod"]).default("dev")
})

export const config = envSchema.parse(process.env)