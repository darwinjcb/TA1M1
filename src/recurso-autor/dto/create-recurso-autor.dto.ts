import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecursoAutorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  correo: string;
}
