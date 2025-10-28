import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseZodSchema } from './dto/create-course.dto';
import { UpdateCourseZodSchema } from './dto/update-course.dto';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import type { CreateCourseDto } from './dto/create-course.dto';
import type { UpdateCourseDto } from './dto/update-course.dto';
import type { CourseAttributes } from './interfaces/course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(CreateCourseZodSchema))
    createCourseDto: CreateCourseDto,
  ): Promise<CourseAttributes> {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  async findAll(): Promise<CourseAttributes[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CourseAttributes> {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(UpdateCourseZodSchema))
    updateCourseDto: UpdateCourseDto,
  ): Promise<CourseAttributes> {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.coursesService.remove(id);
  }
}
