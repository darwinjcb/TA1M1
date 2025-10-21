import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoProfesorService } from './recurso-profesor.service';
import { CreateRecursoProfesorDto } from './dto/create-recurso-profesor.dto';
import { UpdateRecursoProfesorDto } from './dto/update-recurso-profesor.dto';

@Controller('profesores')
export class RecursoProfesorController {
  constructor(private readonly service: RecursoProfesorService) { }

  @Post() create(@Body() dto: CreateRecursoProfesorDto) { return this.service.create(dto); }
  @Get() findAll(@Query('pagina') p = 1, @Query('limite') l = 10) { return this.service.findAll(+p, +l); }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRecursoProfesorDto) { return this.service.update(id, dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
