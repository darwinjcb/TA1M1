import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoMateriaService } from './recurso-materia.service';
import { CreateRecursoMateriaDto } from './dto/create-recurso-materia.dto';
import { UpdateRecursoMateriaDto } from './dto/update-recurso-materia.dto';

@Controller('recurso-materia')
export class RecursoMateriaController {
  constructor(private readonly recursoMateriaService: RecursoMateriaService) {}

  @Post()
  create(@Body() createRecursoMateriaDto: CreateRecursoMateriaDto) {
    return this.recursoMateriaService.create(createRecursoMateriaDto);
  }

  @Get()
  findAll() {
    return this.recursoMateriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoMateriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoMateriaDto: UpdateRecursoMateriaDto) {
    return this.recursoMateriaService.update(+id, updateRecursoMateriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoMateriaService.remove(+id);
  }
}
