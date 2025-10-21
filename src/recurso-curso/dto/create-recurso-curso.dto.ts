import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecursoCursoDto {
  @IsInt() materiaId: number;
  @IsInt() profesorId: number;
  @IsString() @IsNotEmpty() periodo: string; // ej: "2025-1"
  @IsOptional() @IsString() seccion?: string; // ej: "A"
}
