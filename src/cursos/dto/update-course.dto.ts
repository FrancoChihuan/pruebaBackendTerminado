import {
  updateCourseSchema,
  UpdateCourseInput,
} from '../validations/course.schema';

export type UpdateCourseDto = UpdateCourseInput;
export const UpdateCourseZodSchema = updateCourseSchema;