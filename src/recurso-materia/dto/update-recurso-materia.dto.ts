import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoMateriaDto } from './create-recurso-materia.dto';

export class UpdateRecursoMateriaDto extends PartialType(CreateRecursoMateriaDto) {}
