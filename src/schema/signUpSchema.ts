import {z} from 'zod'


export const usernameValidation=z
.string()
.min(2, "username should be at least of 2 digits")
.max(20, "username should be no longer than 20 digits")
.regex(/^[a-zA-Z0-9]+$/,"username should not contain special characters")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"password must be at least og 6 characters"})
})