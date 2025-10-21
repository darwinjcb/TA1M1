import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoCarreraService } from './recurso-carrera.service';
import { CreateRecursoCarreraDto } from './dto/create-recurso-carrera.dto';
import { UpdateRecursoCarreraDto } from './dto/update-recurso-carrera.dto';

@Controller('recurso-carrera')
export class RecursoCarreraController {
  constructor(private readonly recursoCarreraService: RecursoCarreraService) {}

  @Post()
  create(@Body() createRecursoCarreraDto: CreateRecursoCarreraDto) {
    return this.recursoCarreraService.create(createRecursoCarreraDto);
  }

  @Get()
  findAll() {
    return this.recursoCarreraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoCarreraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoCarreraDto: UpdateRecursoCarreraDto) {
    return this.recursoCarreraService.update(+id, updateRecursoCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoCarreraService.remove(+id);
  }
}
