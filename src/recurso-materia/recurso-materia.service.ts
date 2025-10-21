import { Injectable } from '@nestjs/common';
import { CreateRecursoMateriaDto } from './dto/create-recurso-materia.dto';
import { UpdateRecursoMateriaDto } from './dto/update-recurso-materia.dto';

@Injectable()
export class RecursoMateriaService {
  create(createRecursoMateriaDto: CreateRecursoMateriaDto) {
    return 'This action adds a new recursoMateria';
  }

  findAll() {
    return `This action returns all recursoMateria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoMateria`;
  }

  update(id: number, updateRecursoMateriaDto: UpdateRecursoMateriaDto) {
    return `This action updates a #${id} recursoMateria`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoMateria`;
  }
}
