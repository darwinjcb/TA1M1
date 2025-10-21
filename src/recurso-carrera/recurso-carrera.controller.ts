import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoCarreraService } from './recurso-carrera.service';
import { CreateRecursoCarreraDto } from './dto/create-recurso-carrera.dto';
import { UpdateRecursoCarreraDto } from './dto/update-recurso-carrera.dto';

@Controller('carreras')
export class RecursoCarreraController {
  constructor(private readonly service: RecursoCarreraService) {}

  @Post() create(@Body() dto: CreateRecursoCarreraDto) { return this.service.create(dto); }
  @Get() findAll(@Query('pagina') p=1,@Query('limite') l=10){ return this.service.findAll(+p,+l); }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id:number){ return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id:number,@Body() dto:UpdateRecursoCarreraDto){ return this.service.update(id,dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id:number){ return this.service.remove(id); }
}
