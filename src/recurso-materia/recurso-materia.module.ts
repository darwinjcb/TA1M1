import { Module } from '@nestjs/common';
import { RecursoMateriaService } from './recurso-materia.service';
import { RecursoMateriaController } from './recurso-materia.controller';

@Module({
  controllers: [RecursoMateriaController],
  providers: [RecursoMateriaService],
})
export class RecursoMateriaModule {}
