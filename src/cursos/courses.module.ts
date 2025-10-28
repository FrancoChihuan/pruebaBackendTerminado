import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entidades/course.entity';

@Module({
  imports: [SequelizeModule.forFeature([Course])],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
