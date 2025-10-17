import { Module } from '@nestjs/common';
import { RecursoAutorService } from './recurso-autor.service';
import { RecursoAutorController } from './recurso-autor.controller';

@Module({
  controllers: [RecursoAutorController],
  providers: [RecursoAutorService],
})
export class RecursoAutorModule {}
