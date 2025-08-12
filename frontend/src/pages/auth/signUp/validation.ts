import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Min 6 chars'),
    copyPassword: z.string(),
  })
  .refine((data) => data.password === data.copyPassword, {
    message: "Passwords don't match",
    path: ['copyPassword'],
  });

export const initialValues = {
  email: '',
  password: '',
  copyPassword: '',
};
