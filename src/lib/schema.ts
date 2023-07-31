import { z } from "zod";

export const LoginRequest = z.object({
    Username: z.string().max(50),
    Password: z.string().min(8)
})