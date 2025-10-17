import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRecursoLibroDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsOptional()
    @IsDateString()
    fechaPublicacion?: string; // ISO string opcional

    @Type(() => Number)
    @IsInt()
    @Min(1)
    autorId: number;
}
