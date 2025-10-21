import { Module } from '@nestjs/common';
import { RecursoTituloService } from './recurso-titulo.service';
import { RecursoTituloController } from './recurso-titulo.controller';

@Module({
  controllers: [RecursoTituloController],
  providers: [RecursoTituloService],
})
export class RecursoTituloModule {}
