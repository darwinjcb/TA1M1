import { Injectable, NotFoundException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoProfesorDto } from './dto/create-recurso-profesor.dto';
import { UpdateRecursoProfesorDto } from './dto/update-recurso-profesor.dto';

@Injectable()
export class RecursoProfesorService {
  constructor(private prisma: RecursoPrismaService) {}

  async create(dto: CreateRecursoProfesorDto) {
    const item = await this.prisma.profesor.create({ data: dto });
    return { datos: item, mensaje: 'Profesor creado' };
  }

  async findAll(pagina = 1, limite = 10) {
    const skip = (pagina - 1) * limite;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.profesor.findMany({ skip, take: limite, orderBy: { id: 'asc' } }),
      this.prisma.profesor.count(),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.profesor.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Profesor no encontrado');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoProfesorDto) {
    await this.findOne(id);
    const item = await this.prisma.profesor.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Profesor actualizado' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.profesor.delete({ where: { id } });
    return { mensaje: 'Profesor eliminado' };
  }
}
