// src/modulo-auth/servicio-auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ServicioAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(usuario: { id: number; correo: string }) {
    const payload = {
      sub: usuario.id,
      correo: usuario.correo,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      mensaje: 'Login exitoso',
      access_token: token,
    };
  }

  async validarUsuario(correo: string, contrasenia: string) {
    // Aquí luego agregarás comparación con bcrypt y Prisma.
    return null;
  }
}
