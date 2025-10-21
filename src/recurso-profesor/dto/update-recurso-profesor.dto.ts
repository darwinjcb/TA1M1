import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoProfesorDto } from './create-recurso-profesor.dto';

export class UpdateRecursoProfesorDto extends PartialType(CreateRecursoProfesorDto) {}
