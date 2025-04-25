import dotenv from 'dotenv';
import { z } from "zod";

dotenv.config();

const environmentSchema = z.object({
  PORT: z.coerce.number(),
  NODE_ENV: z.enum(['development', 'production', 'test'])
    .default('development'),
  DB_URI: z.string().url(),
});

const parsed = environmentSchema.parse(process.env)

export const port    = parsed.PORT;
export const nodeEnv = parsed.NODE_ENV;
export const dbUrl   = parsed.DB_URI;