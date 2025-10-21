import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuloPrismaModule } from './modulo-prisma/modulo-prisma.module';
import { RecursoPrismaService } from './recurso-prisma/recurso-prisma.service';
import { RecursoPrismaModule } from './recurso-prisma/recurso-prisma.module';
import { RecursoEstudianteModule } from './recurso-estudiante/recurso-estudiante.module';
import { RecursoTituloModule } from './recurso-titulo/recurso-titulo.module';
import { RecursoCursoModule } from './recurso-curso/recurso-curso.module';
import { RecursoInscripcionModule } from './recurso-inscripcion/recurso-inscripcion.module';
import { RecursoCarreraModule } from './recurso-carrera/recurso-carrera.module';
import { RecursoEstudianteModule } from './recurso-estudiante/recurso-estudiante.module';
import { RecursoMateriaModule } from './recurso-materia/recurso-materia.module';
import { RecursoTituloModule } from './recurso-titulo/recurso-titulo.module';
import { RecursoProfesorModule } from './recurso-profesor/recurso-profesor.module';
import { RecursoCursoModule } from './recurso-curso/recurso-curso.module';

@Module({
  imports: [ModuloPrismaModule, RecursoPrismaModule, RecursoEstudianteModule, RecursoTituloModule, RecursoCursoModule, RecursoProfesorModule, RecursoMateriaModule, RecursoCarreraModule, RecursoInscripcionModule],
  controllers: [AppController],
  providers: [AppService, RecursoPrismaService],
})
export class AppModule {}
