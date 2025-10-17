import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoLibroDto } from './create-recurso-libro.dto';

export class UpdateRecursoLibroDto extends PartialType(CreateRecursoLibroDto) {}
