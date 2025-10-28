import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './entidades/course.entity';
import {
  CreateCourseAttributes,
  CourseAttributes,
  UpdateCourseAttributes,
} from './interfaces/course.interface';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course)
    private readonly courseModel: typeof Course,
  ) {}

  async create(payload: CreateCourseDto): Promise<CourseAttributes> {
    const course = await this.courseModel.create(payload as CreateCourseAttributes);
    return course.get({ plain: true }) as CourseAttributes;
  }

  async findAll(): Promise<CourseAttributes[]> {
    const courses = await this.courseModel.findAll({ order: [['createdAt', 'DESC']] });
    return courses.map((course) => course.get({ plain: true }) as CourseAttributes);
  }

  async findOne(id: number): Promise<CourseAttributes> {
    const course = await this.courseModel.findByPk(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course.get({ plain: true }) as CourseAttributes;
  }

  async update(id: number, payload: UpdateCourseDto): Promise<CourseAttributes> {
    const course = await this.courseModel.findByPk(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    await course.update(payload as UpdateCourseAttributes);
    return course.get({ plain: true }) as CourseAttributes;
  }

  async remove(id: number): Promise<void> {
    const course = await this.courseModel.findByPk(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    await course.destroy();
  }
}
