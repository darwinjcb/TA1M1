import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecursoLibroDto } from './dto/create-recurso-libro.dto';
import { UpdateRecursoLibroDto } from './dto/update-recurso-libro.dto';

@Injectable()
export class RecursoLibroService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear libro (POST)
  async create(dto: CreateRecursoLibroDto) {
    return this.prisma.libro.create({
      data: {
        titulo: dto.titulo,
        autorId: dto.autorId,
        fechaPublicacion: dto.fechaPublicacion
          ? new Date(dto.fechaPublicacion)
          : undefined,
      },
    });
  }

  // Listar libros con paginación
  async findAll(page = 1, limit = 10) {
    const p = Math.max(Number(page) || 1, 1);
    const l = Math.min(Math.max(Number(limit) || 10, 1), 50);

    const [total, items] = await this.prisma.$transaction([
      this.prisma.libro.count(),
      this.prisma.libro.findMany({
        skip: (p - 1) * l,
        take: l,
        orderBy: { id: 'asc' },
        include: { autor: true },
      }),
    ]);

    return { items, page: p, limit: l, total };
  }

  // Obtener libro por ID
  async findOne(id: number) {
    const libro = await this.prisma.libro.findUnique({
      where: { id },
      include: { autor: true },
    });

    if (!libro) {
      throw new NotFoundException('Libro no encontrado');
    }

    return libro;
  }

  // Actualizar libro (PUT / PATCH)
  async update(id: number, dto: UpdateRecursoLibroDto) {
    try {
      const data: any = {};

      if (dto.titulo !== undefined) {
        data.titulo = dto.titulo;
      }
      if (dto.fechaPublicacion !== undefined) {
        data.fechaPublicacion = dto.fechaPublicacion
          ? new Date(dto.fechaPublicacion)
          : null;
      }
      if (dto.autorId !== undefined) {
        data.autorId = dto.autorId;
      }

      return await this.prisma.libro.update({
        where: { id },
        data,
      });
    } catch (error) {
      const existe = await this.prisma.libro.findUnique({ where: { id } });
      if (!existe) throw new NotFoundException('Libro no encontrado');
      throw error;
    }
  }

  // Eliminar libro
  async remove(id: number) {
    try {
      return await this.prisma.libro.delete({ where: { id } });
    } catch (error) {
      const existe = await this.prisma.libro.findUnique({ where: { id } });
      if (!existe) throw new NotFoundException('Libro no encontrado');
      throw error;
    }
  }
}
