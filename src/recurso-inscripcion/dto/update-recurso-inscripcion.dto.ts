import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoInscripcionDto } from './create-recurso-inscripcion.dto';

export class UpdateRecursoInscripcionDto extends PartialType(CreateRecursoInscripcionDto) {}
