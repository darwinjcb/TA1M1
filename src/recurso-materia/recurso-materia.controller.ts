import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecursoMateriaService } from './recurso-materia.service';
import { CreateRecursoMateriaDto } from './dto/create-recurso-materia.dto';
import { UpdateRecursoMateriaDto } from './dto/update-recurso-materia.dto';

@Controller('materias')
export class RecursoMateriaController {
  constructor(private readonly service: RecursoMateriaService) {}

  @Post() create(@Body() dto: CreateRecursoMateriaDto) { return this.service.create(dto); }
  @Get() findAll(@Query('pagina') p=1,@Query('limite') l=10,@Query('carreraId') carreraId?:string){
    return this.service.findAll(+p,+l, carreraId?+carreraId:undefined);
  }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id:number){ return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id:number,@Body() dto:UpdateRecursoMateriaDto){ return this.service.update(id,dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id:number){ return this.service.remove(id); }
}
