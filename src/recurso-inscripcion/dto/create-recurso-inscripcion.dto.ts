import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateRecursoInscripcionDto {
  @IsInt() estudianteId: number;
  @IsInt() cursoId: number;
  @IsOptional() @IsString() estado?: string; // "ACTIVA", "RETIRADA", etc.
}
