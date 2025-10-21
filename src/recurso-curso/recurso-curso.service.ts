import { Injectable, NotFoundException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoCursoDto } from './dto/create-recurso-curso.dto';
import { UpdateRecursoCursoDto } from './dto/update-recurso-curso.dto';

@Injectable()
export class RecursoCursoService {
  constructor(private prisma: RecursoPrismaService) { }

  async create(dto: CreateRecursoCursoDto) {
    const item = await this.prisma.curso.create({ data: dto });
    return { datos: item, mensaje: 'Curso creado' };
  }

  async findAll(pagina = 1, limite = 10, periodo?: string, materiaId?: number, profesorId?: number) {
    const skip = (pagina - 1) * limite;
    const where: any = {};
    if (periodo) where.periodo = periodo;
    if (materiaId) where.materiaId = Number(materiaId);
    if (profesorId) where.profesorId = Number(profesorId);

    const [items, total] = await this.prisma.$transaction([
      this.prisma.curso.findMany({
        skip, take: limite, where, orderBy: { id: 'asc' },
        include: { materia: true, profesor: true },
      }),
      this.prisma.curso.count({ where }),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.curso.findUnique({
      where: { id },
      include: { materia: true, profesor: true },
    });
    if (!item) throw new NotFoundException('Curso no encontrado');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoCursoDto) {
    await this.findOne(id);
    const item = await this.prisma.curso.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Curso actualizado' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.curso.delete({ where: { id } });
    return { mensaje: 'Curso eliminado' };
  }
}
