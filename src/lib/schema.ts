import { z } from "zod";

export const LoginRequest = z.object({
    Username: z.string().min(1).max(30),
    Password: z.string().min(1)
})