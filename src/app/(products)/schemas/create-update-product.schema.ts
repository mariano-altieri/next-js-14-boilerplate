import * as z from 'zod';

export const createUpdateProductSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, {
    message: 'Title is required.',
  }),
  description: z.string().min(1, {
    message: 'Description is required.',
  }),
  category: z.string().min(1, {
    message: 'Category is required.',
  }),
  price: z.coerce
    .number()
    .positive({
      message: 'Price must be a positive number.',
    })
    .min(1, {
      message: 'Price is required.',
    }),
  discountPercentage: z.coerce
    .number({
      message: 'Discount percentage must be a number.',
    })
    .min(0)
    .max(100),
  stock: z.coerce
    .number({
      message: 'Stock must be a number.',
    })
    .int()
    .min(0),
  tags: z.array(z.string()).optional(),
  brand: z.string().optional(),
  sku: z.string().optional(),
  images: z.array(z.string()).optional(),
  thumbnail: z.string().optional(),
});

export type CreateUpdateProduct = z.infer<typeof createUpdateProductSchema>;
