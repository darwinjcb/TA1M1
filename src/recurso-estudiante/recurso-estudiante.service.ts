import { Injectable, NotFoundException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoEstudianteDto } from './dto/create-recurso-estudiante.dto';
import { UpdateRecursoEstudianteDto } from './dto/update-recurso-estudiante.dto';

@Injectable()
export class RecursoEstudianteService {
  constructor(private prisma: RecursoPrismaService) {}

  async create(dto: CreateRecursoEstudianteDto) {
    const item = await this.prisma.estudiante.create({ data: dto });
    return { datos: item, mensaje: 'Estudiante creado' };
  }

  async findAll(pagina = 1, limite = 10) {
    const skip = (pagina - 1) * limite;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.estudiante.findMany({ skip, take: limite, orderBy: { id: 'asc' } }),
      this.prisma.estudiante.count(),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.estudiante.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Estudiante no encontrado');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoEstudianteDto) {
    await this.findOne(id);
    const item = await this.prisma.estudiante.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Estudiante actualizado' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.estudiante.delete({ where: { id } });
    return { mensaje: 'Estudiante eliminado' };
  }
}
