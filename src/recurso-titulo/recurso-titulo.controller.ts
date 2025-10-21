import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoTituloService } from './recurso-titulo.service';
import { CreateRecursoTituloDto } from './dto/create-recurso-titulo.dto';
import { UpdateRecursoTituloDto } from './dto/update-recurso-titulo.dto';

@Controller('titulos')
export class RecursoTituloController {
  constructor(private readonly service: RecursoTituloService) {}

  @Post() create(@Body() dto: CreateRecursoTituloDto) { return this.service.create(dto); }
  @Get() findAll(@Query('pagina') p=1,@Query('limite') l=10,@Query('profesorId') profesorId?:string){
    return this.service.findAll(+p,+l, profesorId?+profesorId:undefined);
  }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id:number){ return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id:number,@Body() dto:UpdateRecursoTituloDto){ return this.service.update(id,dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id:number){ return this.service.remove(id); }
}
