import { Injectable } from '@nestjs/common';
import { CreateRecursoEstudianteDto } from './dto/create-recurso-estudiante.dto';
import { UpdateRecursoEstudianteDto } from './dto/update-recurso-estudiante.dto';

@Injectable()
export class RecursoEstudianteService {
  create(createRecursoEstudianteDto: CreateRecursoEstudianteDto) {
    return 'This action adds a new recursoEstudiante';
  }

  findAll() {
    return `This action returns all recursoEstudiante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoEstudiante`;
  }

  update(id: number, updateRecursoEstudianteDto: UpdateRecursoEstudianteDto) {
    return `This action updates a #${id} recursoEstudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoEstudiante`;
  }
}
