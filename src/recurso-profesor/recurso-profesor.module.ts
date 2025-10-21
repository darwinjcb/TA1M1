import { Module } from '@nestjs/common';
import { RecursoProfesorService } from './recurso-profesor.service';
import { RecursoProfesorController } from './recurso-profesor.controller';

@Module({
  controllers: [RecursoProfesorController],
  providers: [RecursoProfesorService],
})
export class RecursoProfesorModule {}
