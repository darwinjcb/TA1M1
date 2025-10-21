import { Injectable } from '@nestjs/common';
import { CreateRecursoCarreraDto } from './dto/create-recurso-carrera.dto';
import { UpdateRecursoCarreraDto } from './dto/update-recurso-carrera.dto';

@Injectable()
export class RecursoCarreraService {
  create(createRecursoCarreraDto: CreateRecursoCarreraDto) {
    return 'This action adds a new recursoCarrera';
  }

  findAll() {
    return `This action returns all recursoCarrera`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoCarrera`;
  }

  update(id: number, updateRecursoCarreraDto: UpdateRecursoCarreraDto) {
    return `This action updates a #${id} recursoCarrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoCarrera`;
  }
}
