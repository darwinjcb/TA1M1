// src/modulo-auth/modulo-auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServicioAuthService } from '../servicio-auth/servicio-auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true, // hace accesible JwtService sin volver a importarlo
      secret: process.env.JWT_SECRETO, // leído desde .env
      signOptions: {
        // usamos ?? para poner un valor por defecto y as any para evitar el error de tipos
        expiresIn: (process.env.JWT_EXPIRA ?? '1h') as any,
      },
    }),
  ],
  providers: [ServicioAuthService],
  exports: [ServicioAuthService],
})
export class ModuloAuthModule {}
