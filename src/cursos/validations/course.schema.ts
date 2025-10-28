import { z } from 'zod';

export const courseLevels = ['beginner', 'intermediate', 'advanced'] as const;
const levelEnum = z.enum(courseLevels);

export const createCourseSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'name must not be empty')
      .max(255, 'name must have at most 255 characters'),
    description: z.string().trim().min(1, 'description must not be empty'),
    level: z
      .string()
      .trim()
      .min(1, 'level must not be empty')
      .transform((value) => value.toLowerCase())
      .pipe(levelEnum),
    duration: z
      .number()
      .int('duration must be an integer')
      .positive('duration must be greater than zero'),
  })
  .strict();

export const updateCourseSchema = createCourseSchema
  .partial()
  .refine(
    (payload) => Object.keys(payload).length > 0,
    'at least one property must be provided',
  )
  .strict();

export type CreateCourseInput = z.infer<typeof createCourseSchema>;
export type UpdateCourseInput = z.infer<typeof updateCourseSchema>;
