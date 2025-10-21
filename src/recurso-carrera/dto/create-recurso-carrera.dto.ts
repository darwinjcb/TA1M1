// src/recurso-carrera/dto/create-recurso-carrera.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecursoCarreraDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
