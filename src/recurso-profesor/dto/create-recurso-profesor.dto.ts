import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecursoProfesorDto {
  @IsString() @IsNotEmpty() nombre: string;
  @IsOptional() @IsEmail() correo?: string;
}
