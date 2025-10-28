import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: process.env.DB_PATH ?? 'database.sqlite',
  autoLoadModels: true,
  synchronize: true,
  logging: false,
};
