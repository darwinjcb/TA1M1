import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { RecursoPrismaService } from '../recurso-prisma/recurso-prisma.service';
import { CreateRecursoInscripcionDto } from './dto/create-recurso-inscripcion.dto';
import { UpdateRecursoInscripcionDto } from './dto/update-recurso-inscripcion.dto';

@Injectable()
export class RecursoInscripcionService {
  constructor(private prisma: RecursoPrismaService) {}

  async create(dto: CreateRecursoInscripcionDto) {
    // evita duplicado (también protegido por @@unique)
    const dup = await this.prisma.inscripcion.findUnique({
      where: { estudianteId_cursoId: { estudianteId: dto.estudianteId, cursoId: dto.cursoId } },
    }).catch(() => null);
    if (dup) throw new BadRequestException('El estudiante ya está inscrito en ese curso');

    const item = await this.prisma.inscripcion.create({ data: dto });
    return { datos: item, mensaje: 'Inscripción creada' };
  }

  async findAll(pagina = 1, limite = 10, estudianteId?: number, cursoId?: number) {
    const skip = (pagina - 1) * limite;
    const where: any = {};
    if (estudianteId) where.estudianteId = Number(estudianteId);
    if (cursoId) where.cursoId = Number(cursoId);

    const [items, total] = await this.prisma.$transaction([
      this.prisma.inscripcion.findMany({
        skip, take: limite, where, orderBy: { id: 'asc' },
        include: { estudiante: true, curso: { include: { materia: true, profesor: true } } },
      }),
      this.prisma.inscripcion.count({ where }),
    ]);
    return { datos: items, meta: { total, pagina, limite } };
  }

  async findOne(id: number) {
    const item = await this.prisma.inscripcion.findUnique({
      where: { id },
      include: { estudiante: true, curso: { include: { materia: true, profesor: true } } },
    });
    if (!item) throw new NotFoundException('Inscripción no encontrada');
    return { datos: item };
  }

  async update(id: number, dto: UpdateRecursoInscripcionDto) {
    await this.findOne(id);
    const item = await this.prisma.inscripcion.update({ where: { id }, data: dto });
    return { datos: item, mensaje: 'Inscripción actualizada' };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.inscripcion.delete({ where: { id } });
    return { mensaje: 'Inscripción eliminada' };
  }
}
