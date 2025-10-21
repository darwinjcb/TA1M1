import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecursoEstudianteDto {
  @IsString() @IsNotEmpty() codigo: string;
  @IsString() @IsNotEmpty() nombre: string;
  @IsOptional() @IsEmail() correo?: string;
}
