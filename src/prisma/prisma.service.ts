import { Injectable, INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Conectar Prisma al iniciar el módulo
  async onModuleInit() {
    await this.$connect();
  }

  // Cerrar ordenadamente cuando la app se apaga
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
