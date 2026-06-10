import dotenv from "dotenv"
import { z } from "zod"

dotenv.config({
    quiet: true
})

const envSchema = z.object({
    PORT: z.coerce.number(),
    NODE_ENV: z.enum(["dev", "prod"]).default("dev"),
    DATABASE_URL: z.coerce.string(),
    REDIS_URL: z.coerce.string()
})

export const config = envSchema.parse(process.env)