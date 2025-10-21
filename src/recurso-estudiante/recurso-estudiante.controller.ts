import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoEstudianteService } from './recurso-estudiante.service';
import { CreateRecursoEstudianteDto } from './dto/create-recurso-estudiante.dto';
import { UpdateRecursoEstudianteDto } from './dto/update-recurso-estudiante.dto';

@Controller('recurso-estudiante')
export class RecursoEstudianteController {
  constructor(private readonly recursoEstudianteService: RecursoEstudianteService) {}

  @Post()
  create(@Body() createRecursoEstudianteDto: CreateRecursoEstudianteDto) {
    return this.recursoEstudianteService.create(createRecursoEstudianteDto);
  }

  @Get()
  findAll() {
    return this.recursoEstudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoEstudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoEstudianteDto: UpdateRecursoEstudianteDto) {
    return this.recursoEstudianteService.update(+id, updateRecursoEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoEstudianteService.remove(+id);
  }
}
