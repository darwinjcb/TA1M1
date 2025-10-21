import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoEstudianteDto } from './create-recurso-estudiante.dto';

export class UpdateRecursoEstudianteDto extends PartialType(CreateRecursoEstudianteDto) {}
