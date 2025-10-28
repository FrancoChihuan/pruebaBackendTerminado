import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { CourseAttributes, CreateCourseAttributes } from '../interfaces/course.interface';

@Table({
  tableName: 'courses',
  timestamps: true,
})
export class Course
  extends Model<CourseAttributes, CreateCourseAttributes>
  implements CourseAttributes
{
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  declare description: string;

  @Column({
    type: DataType.STRING(64),
    allowNull: false,
  })
  declare level: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare duration: number;

  @CreatedAt
  declare readonly createdAt: Date;

  @UpdatedAt
  declare readonly updatedAt: Date;
}
