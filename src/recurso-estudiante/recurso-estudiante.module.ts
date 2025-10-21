import { Module } from '@nestjs/common';
import { RecursoEstudianteService } from './recurso-estudiante.service';
import { RecursoEstudianteController } from './recurso-estudiante.controller';

@Module({
  controllers: [RecursoEstudianteController],
  providers: [RecursoEstudianteService],
})
export class RecursoEstudianteModule {}
