import { Injectable } from '@nestjs/common';
import { CreateRecursoTituloDto } from './dto/create-recurso-titulo.dto';
import { UpdateRecursoTituloDto } from './dto/update-recurso-titulo.dto';

@Injectable()
export class RecursoTituloService {
  create(createRecursoTituloDto: CreateRecursoTituloDto) {
    return 'This action adds a new recursoTitulo';
  }

  findAll() {
    return `This action returns all recursoTitulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoTitulo`;
  }

  update(id: number, updateRecursoTituloDto: UpdateRecursoTituloDto) {
    return `This action updates a #${id} recursoTitulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoTitulo`;
  }
}
