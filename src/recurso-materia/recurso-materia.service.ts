import { Injectable, NotFoundException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoMateriaDto } from './dto/create-recurso-materia.dto';
import { UpdateRecursoMateriaDto } from './dto/update-recurso-materia.dto';

@Injectable()
export class RecursoMateriaService {
  constructor(private prisma: RecursoPrismaService) {}

  async create(dto: CreateRecursoMateriaDto) {
    const item = await this.prisma.materia.create({ data: dto });
    return { datos: item, mensaje: 'Materia creada' };
  }

  async findAll(pagina = 1, limite = 10, carreraId?: number) {
    const skip = (pagina - 1) * limite;
    const where: any = {};
    if (carreraId) where.carreraId = Number(carreraId);

    const [items, total] = await this.prisma.$transaction([
      this.prisma.materia.findMany({ skip, take: limite, where, orderBy: { id: 'asc' } }),
      this.prisma.materia.count({ where }),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.materia.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Materia no encontrada');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoMateriaDto) {
    await this.findOne(id);
    const item = await this.prisma.materia.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Materia actualizada' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.materia.delete({ where: { id } });
    return { mensaje: 'Materia eliminada' };
  }
}
