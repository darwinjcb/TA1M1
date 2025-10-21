import { Injectable } from '@nestjs/common';
import { CreateRecursoInscripcionDto } from './dto/create-recurso-inscripcion.dto';
import { UpdateRecursoInscripcionDto } from './dto/update-recurso-inscripcion.dto';

@Injectable()
export class RecursoInscripcionService {
  create(createRecursoInscripcionDto: CreateRecursoInscripcionDto) {
    return 'This action adds a new recursoInscripcion';
  }

  findAll() {
    return `This action returns all recursoInscripcion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoInscripcion`;
  }

  update(id: number, updateRecursoInscripcionDto: UpdateRecursoInscripcionDto) {
    return `This action updates a #${id} recursoInscripcion`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoInscripcion`;
  }
}
