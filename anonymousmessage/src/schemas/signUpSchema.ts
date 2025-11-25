import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(3, "Username must be more than 3 characters")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[A-Za-z0-9]{3,16}$/, "Username must not contains special characters" )


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string()
                .min(6, {message: "Password must be at least 6 characters"})
                .max(12, {message: "Password must not be more than 12 characters"})
})