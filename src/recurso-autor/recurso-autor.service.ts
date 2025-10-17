import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecursoAutorDto } from './dto/create-recurso-autor.dto';
import { UpdateRecursoAutorDto } from './dto/update-recurso-autor.dto';

@Injectable()
export class RecursoAutorService {
  constructor(private readonly prisma: PrismaService) {}

  // POST mínimo
  async create(dto: CreateRecursoAutorDto) {
    return this.prisma.autor.create({
      data: { nombre: dto.nombre, correo: dto.correo },
    });
  }

  // GET listado con paginación ?page & ?limit
  async findAll(page = 1, limit = 10) {
    const p = Math.max(Number(page) || 1, 1);
    const l = Math.min(Math.max(Number(limit) || 10, 1), 50);

    const [total, items] = await this.prisma.$transaction([
      this.prisma.autor.count(),
      this.prisma.autor.findMany({
        skip: (p - 1) * l,
        take: l,
        orderBy: { id: 'asc' },
      }),
    ]);

    return { items, page: p, limit: l, total };
  }

  // GET por id (404 si no existe)
  async findOne(id: number) {
    const autor = await this.prisma.autor.findUnique({
      where: { id },
      include: { libros: true }, // quita include si no quieres traer libros
    });
    if (!autor) throw new NotFoundException('Autor no encontrado');
    return autor;
  }

  // (Opcional) UPDATE — no exigido por la práctica
  async update(id: number, dto: UpdateRecursoAutorDto) {
    try {
      return await this.prisma.autor.update({
        where: { id },
        data: {
          ...(dto.nombre !== undefined ? { nombre: dto.nombre } : {}),
          ...(dto.correo !== undefined ? { correo: dto.correo } : {}),
        },
      });
    } catch (e) {
      const existe = await this.prisma.autor.findUnique({ where: { id } });
      if (!existe) throw new NotFoundException('Autor no encontrado');
      throw e; // <- lanzar el error original
    }
  }

  // (Opcional) DELETE — no exigido por la práctica
  async remove(id: number) {
    try {
      return await this.prisma.autor.delete({ where: { id } });
    } catch (e) {
      const existe = await this.prisma.autor.findUnique({ where: { id } });
      if (!existe) throw new NotFoundException('Autor no encontrado');
      throw e; // <- lanzar el error original
    }
  }
}
