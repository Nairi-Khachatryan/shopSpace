import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().nonempty('Name is required'),
  price: z
    .number({ invalid_type_error: 'Price must be a number' })
    .positive('Price must be positive'),
  category: z.string().nonempty('Category is required'),
  description: z.string().nonempty('Description is required'),
  image: z.string().url('Must be a valid URL'),
});
