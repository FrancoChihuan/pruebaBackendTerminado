import { createCourseSchema, CreateCourseInput } from '../validations/course.schema';

export type CreateCourseDto = CreateCourseInput;
export const CreateCourseZodSchema = createCourseSchema;