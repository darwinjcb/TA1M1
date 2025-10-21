import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoEstudianteService } from './recurso-estudiante.service';
import { CreateRecursoEstudianteDto } from './dto/create-recurso-estudiante.dto';
import { UpdateRecursoEstudianteDto } from './dto/update-recurso-estudiante.dto';

@Controller('estudiantes')
export class RecursoEstudianteController {
  constructor(private readonly service: RecursoEstudianteService) { }

  @Post() create(@Body() dto: CreateRecursoEstudianteDto) { return this.service.create(dto); }
  @Get() findAll(@Query('pagina') p = 1, @Query('limite') l = 10) { return this.service.findAll(+p, +l); }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRecursoEstudianteDto) { return this.service.update(id, dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
