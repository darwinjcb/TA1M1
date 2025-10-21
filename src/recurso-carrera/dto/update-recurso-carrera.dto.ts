import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoCarreraDto } from './create-recurso-carrera.dto';

export class UpdateRecursoCarreraDto extends PartialType(CreateRecursoCarreraDto) {}
