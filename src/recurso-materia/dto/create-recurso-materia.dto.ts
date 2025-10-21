import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecursoMateriaDto {
  @IsInt() carreraId: number;
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() @IsNotEmpty() codigo: string;
}
