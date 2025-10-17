import { Module } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { AutoresController } from './autores.controller';

@Module({
  providers: [AutoresService],
  controllers: [AutoresController]
})
export class AutoresModule {}
