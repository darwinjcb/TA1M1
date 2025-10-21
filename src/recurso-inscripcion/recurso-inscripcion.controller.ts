import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoInscripcionService } from './recurso-inscripcion.service';
import { CreateRecursoInscripcionDto } from './dto/create-recurso-inscripcion.dto';
import { UpdateRecursoInscripcionDto } from './dto/update-recurso-inscripcion.dto';

@Controller('inscripciones')
export class RecursoInscripcionController {
  constructor(private readonly service: RecursoInscripcionService) {}

  @Post() create(@Body() dto: CreateRecursoInscripcionDto) { return this.service.create(dto); }
  @Get() findAll(@Query('pagina') p=1,@Query('limite') l=10,@Query('estudianteId') eId?:string,@Query('cursoId') cId?:string){
    return this.service.findAll(+p,+l, eId?+eId:undefined, cId?+cId:undefined);
  }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id:number){ return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id:number,@Body() dto:UpdateRecursoInscripcionDto){ return this.service.update(id,dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id:number){ return this.service.remove(id); }
}
