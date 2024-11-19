import { z } from 'zod';

const basePicturesSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  next_page: z.string().url().optional(),
  prev_page: z.string().url().optional()
});

export const PictureSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string().url(),
  photographer: z.string(),
  photographer_url: z.string().url(),
  avg_color: z.string(),
  alt: z.string(),
  src: z.object({
    original: z.string().url(),
    medium: z.string().url()
  })
});

export const PicturesSchema = basePicturesSchema.extend({
  photos: z.array(PictureSchema)
});

export type PicturesI = z.infer<typeof PicturesSchema>;
export type PictureI = z.infer<typeof PictureSchema>;
