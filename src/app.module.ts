import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecursoAutorModule } from './recurso-autor/recurso-autor.module';
import { RecursoLibroModule } from './recurso-libro/recurso-libro.module';

@Module({
  imports: [
    // Variables de entorno disponibles en toda la app
    ConfigModule.forRoot({ isGlobal: true }),
    // PrismaModule es @Global(), no hace falta re-exportarlo luego
    PrismaModule,
    // Recurso actual (autores)
    RecursoAutorModule,
    RecursoLibroModule,
  ],
  controllers: [AppController],
  providers: [AppService], // ❌ No pongas PrismaService aquí (lo provee PrismaModule)
})
export class AppModule {}
