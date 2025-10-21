import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoCursoService } from './recurso-curso.service';
import { CreateRecursoCursoDto } from './dto/create-recurso-curso.dto';
import { UpdateRecursoCursoDto } from './dto/update-recurso-curso.dto';

@Controller('cursos')
export class RecursoCursoController {
  constructor(private readonly service: RecursoCursoService) {}

  @Post() create(@Body() dto: CreateRecursoCursoDto) { return this.service.create(dto); }
  @Get()
  findAll(
    @Query('pagina') p=1,@Query('limite') l=10,
    @Query('periodo') periodo?:string,
    @Query('materiaId') materiaId?:string,
    @Query('profesorId') profesorId?:string,
  ){
    return this.service.findAll(+p,+l, periodo, materiaId?+materiaId:undefined, profesorId?+profesorId:undefined);
  }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id:number){ return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id:number,@Body() dto:UpdateRecursoCursoDto){ return this.service.update(id,dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id:number){ return this.service.remove(id); }
}
