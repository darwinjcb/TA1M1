import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecursoTituloDto {
  @IsInt() profesorId: number;
  @IsString() @IsNotEmpty() nombre: string;
  @IsOptional() @IsString() institucion?: string;
  @IsOptional() anio?: number;
}
