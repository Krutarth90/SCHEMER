import { string, z } from 'zod';

export const signupSchema = z.object({
    username : string().email(),
    fName : string(),
    lName : string(),
    password : string().min(6)
})