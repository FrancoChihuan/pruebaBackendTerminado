import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ZodSchema, ZodTypeAny } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema | ZodTypeAny) {}

  transform<TValue = unknown>(value: TValue): TValue {
    const result = this.schema.safeParse(value);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }));

      throw new BadRequestException({
        message: 'Validation failed',
        errors,
      });
    }

    return result.data as TValue;
  }
}
