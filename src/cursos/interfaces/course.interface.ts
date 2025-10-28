export interface CourseAttributes {
  id: number;
  name: string;
  description: string;
  level: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCourseAttributes = Omit<
  CourseAttributes,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateCourseAttributes = Partial<CreateCourseAttributes>;
