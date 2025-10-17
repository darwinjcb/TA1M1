import { Module } from '@nestjs/common';
import { RecursoLibroService } from './recurso-libro.service';
import { RecursoLibroController } from './recurso-libro.controller';

@Module({
  controllers: [RecursoLibroController],
  providers: [RecursoLibroService],
})
export class RecursoLibroModule {}
