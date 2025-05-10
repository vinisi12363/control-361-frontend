import { z } from 'zod'

const envSchema = z.object({
    VITE_API_URL: z.string(),
    VITE_API_KEY: z.string(),
    VITE_GOOGLE_API_KEY: z.string(),
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.format())
  throw new Error('Missing or invalid environment variables.')
}

export const env = parsed.data
