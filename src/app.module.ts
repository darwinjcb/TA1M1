import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RecursoPrismaModule } from './recurso-prisma/recurso-prisma.module';
import { RecursoEstudianteModule } from './recurso-estudiante/recurso-estudiante.module';
import { RecursoProfesorModule } from './recurso-profesor/recurso-profesor.module';
import { RecursoTituloModule } from './recurso-titulo/recurso-titulo.module';
import { RecursoCarreraModule } from './recurso-carrera/recurso-carrera.module';
import { RecursoMateriaModule } from './recurso-materia/recurso-materia.module';
import { RecursoCursoModule } from './recurso-curso/recurso-curso.module';
import { RecursoInscripcionModule } from './recurso-inscripcion/recurso-inscripcion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RecursoPrismaModule,
    RecursoEstudianteModule,
    RecursoProfesorModule,
    RecursoTituloModule,
    RecursoCarreraModule,
    RecursoMateriaModule,
    RecursoCursoModule,
    RecursoInscripcionModule,
  ],
})
export class AppModule {}
