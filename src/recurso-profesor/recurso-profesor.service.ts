import { Injectable } from '@nestjs/common';
import { CreateRecursoProfesorDto } from './dto/create-recurso-profesor.dto';
import { UpdateRecursoProfesorDto } from './dto/update-recurso-profesor.dto';

@Injectable()
export class RecursoProfesorService {
  create(createRecursoProfesorDto: CreateRecursoProfesorDto) {
    return 'This action adds a new recursoProfesor';
  }

  findAll() {
    return `This action returns all recursoProfesor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoProfesor`;
  }

  update(id: number, updateRecursoProfesorDto: UpdateRecursoProfesorDto) {
    return `This action updates a #${id} recursoProfesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoProfesor`;
  }
}
