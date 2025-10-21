import { Module } from '@nestjs/common';
import { RecursoCursoService } from './recurso-curso.service';
import { RecursoCursoController } from './recurso-curso.controller';

@Module({
  controllers: [RecursoCursoController],
  providers: [RecursoCursoService],
})
export class RecursoCursoModule {}
