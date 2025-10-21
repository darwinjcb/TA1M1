import { Global, Module } from '@nestjs/common';
import { RecursoPrismaService } from './recurso-prisma.service';

@Global()
@Module({
  providers: [RecursoPrismaService],
  exports: [RecursoPrismaService],
})
export class RecursoPrismaModule {}
