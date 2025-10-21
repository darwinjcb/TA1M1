import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoTituloService } from './recurso-titulo.service';
import { CreateRecursoTituloDto } from './dto/create-recurso-titulo.dto';
import { UpdateRecursoTituloDto } from './dto/update-recurso-titulo.dto';

@Controller('recurso-titulo')
export class RecursoTituloController {
  constructor(private readonly recursoTituloService: RecursoTituloService) {}

  @Post()
  create(@Body() createRecursoTituloDto: CreateRecursoTituloDto) {
    return this.recursoTituloService.create(createRecursoTituloDto);
  }

  @Get()
  findAll() {
    return this.recursoTituloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoTituloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoTituloDto: UpdateRecursoTituloDto) {
    return this.recursoTituloService.update(+id, updateRecursoTituloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoTituloService.remove(+id);
  }
}
