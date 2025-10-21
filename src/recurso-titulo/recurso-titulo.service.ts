import { Injectable, NotFoundException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoTituloDto } from './dto/create-recurso-titulo.dto';
import { UpdateRecursoTituloDto } from './dto/update-recurso-titulo.dto';

@Injectable()
export class RecursoTituloService {
  constructor(private prisma: RecursoPrismaService) {}

  async create(dto: CreateRecursoTituloDto) {
    const item = await this.prisma.titulo.create({ data: dto });
    return { datos: item, mensaje: 'Título creado' };
  }

  async findAll(pagina = 1, limite = 10, profesorId?: number) {
    const skip = (pagina - 1) * limite;
    const where: any = {};
    if (profesorId) where.profesorId = Number(profesorId);

    const [items, total] = await this.prisma.$transaction([
      this.prisma.titulo.findMany({ skip, take: limite, where, orderBy: { id: 'asc' } }),
      this.prisma.titulo.count({ where }),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.titulo.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Título no encontrado');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoTituloDto) {
    await this.findOne(id);
    const item = await this.prisma.titulo.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Título actualizado' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.titulo.delete({ where: { id } });
    return { mensaje: 'Título eliminado' };
  }
}
