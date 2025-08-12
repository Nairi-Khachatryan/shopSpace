import z from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 chars'),
});

export const initialValues = {
  email: '',
  password: '',
};
