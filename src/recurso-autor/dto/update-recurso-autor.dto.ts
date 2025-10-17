import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoAutorDto } from './create-recurso-autor.dto';

export class UpdateRecursoAutorDto extends PartialType(CreateRecursoAutorDto) {}
