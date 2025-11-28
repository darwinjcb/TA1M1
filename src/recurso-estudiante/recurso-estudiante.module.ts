import { Module } from '@nestjs/common';
import { RecursoPrismaModule } from '../recurso-prisma/recurso-prisma.module';
import { RecursoEstudianteService } from './recurso-estudiante.service';
import { RecursoEstudianteController } from './recurso-estudiante.controller';

@Module({
  imports: [RecursoPrismaModule],
  controllers: [RecursoEstudianteController],
  providers: [RecursoEstudianteService],
})
export class RecursoEstudianteModule {}
