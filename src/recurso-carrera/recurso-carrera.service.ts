import { Injectable, NotFoundException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoCarreraDto } from './dto/create-recurso-carrera.dto';
import { UpdateRecursoCarreraDto } from './dto/update-recurso-carrera.dto';

@Injectable()
export class RecursoCarreraService {
  constructor(private prisma: RecursoPrismaService) {}

  async create(dto: CreateRecursoCarreraDto) {
    const item = await this.prisma.carrera.create({ data: dto });
    return { datos: item, mensaje: 'Carrera creada' };
  }

  async findAll(pagina = 1, limite = 10) {
    const skip = (pagina - 1) * limite;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.carrera.findMany({ skip, take: limite, orderBy: { id: 'asc' } }),
      this.prisma.carrera.count(),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.carrera.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Carrera no encontrada');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoCarreraDto) {
    await this.findOne(id);
    const item = await this.prisma.carrera.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Carrera actualizada' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.carrera.delete({ where: { id } });
    return { mensaje: 'Carrera eliminada' };
  }
}
