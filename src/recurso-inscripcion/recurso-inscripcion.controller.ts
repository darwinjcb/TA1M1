import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoInscripcionService } from './recurso-inscripcion.service';
import { CreateRecursoInscripcionDto } from './dto/create-recurso-inscripcion.dto';
import { UpdateRecursoInscripcionDto } from './dto/update-recurso-inscripcion.dto';

@Controller('recurso-inscripcion')
export class RecursoInscripcionController {
  constructor(private readonly recursoInscripcionService: RecursoInscripcionService) {}

  @Post()
  create(@Body() createRecursoInscripcionDto: CreateRecursoInscripcionDto) {
    return this.recursoInscripcionService.create(createRecursoInscripcionDto);
  }

  @Get()
  findAll() {
    return this.recursoInscripcionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoInscripcionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoInscripcionDto: UpdateRecursoInscripcionDto) {
    return this.recursoInscripcionService.update(+id, updateRecursoInscripcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoInscripcionService.remove(+id);
  }
}
