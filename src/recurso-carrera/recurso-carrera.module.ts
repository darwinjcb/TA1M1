import { Module } from '@nestjs/common';
import { RecursoCarreraService } from './recurso-carrera.service';
import { RecursoCarreraController } from './recurso-carrera.controller';

@Module({
  controllers: [RecursoCarreraController],
  providers: [RecursoCarreraService],
})
export class RecursoCarreraModule {}
