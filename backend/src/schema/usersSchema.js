import { z } from 'zod'

export const UserSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6)
});

export function validateUsers(input) {
  return UserSchema.safeParse(input)
}
