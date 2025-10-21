import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoCursoDto } from './create-recurso-curso.dto';

export class UpdateRecursoCursoDto extends PartialType(CreateRecursoCursoDto) {}
