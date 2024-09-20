import { loginSchema } from '@/schemas/login'
import { z } from 'zod'

export type LoginFormType = z.infer<typeof loginSchema>
