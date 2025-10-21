import { Module } from '@nestjs/common';
import { RecursoInscripcionService } from './recurso-inscripcion.service';
import { RecursoInscripcionController } from './recurso-inscripcion.controller';

@Module({
  controllers: [RecursoInscripcionController],
  providers: [RecursoInscripcionService],
})
export class RecursoInscripcionModule {}
