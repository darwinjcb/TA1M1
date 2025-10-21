import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoTituloDto } from './create-recurso-titulo.dto';

export class UpdateRecursoTituloDto extends PartialType(CreateRecursoTituloDto) {}
