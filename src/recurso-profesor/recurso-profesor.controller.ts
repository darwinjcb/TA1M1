import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoProfesorService } from './recurso-profesor.service';
import { CreateRecursoProfesorDto } from './dto/create-recurso-profesor.dto';
import { UpdateRecursoProfesorDto } from './dto/update-recurso-profesor.dto';

@Controller('recurso-profesor')
export class RecursoProfesorController {
  constructor(private readonly recursoProfesorService: RecursoProfesorService) {}

  @Post()
  create(@Body() createRecursoProfesorDto: CreateRecursoProfesorDto) {
    return this.recursoProfesorService.create(createRecursoProfesorDto);
  }

  @Get()
  findAll() {
    return this.recursoProfesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoProfesorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoProfesorDto: UpdateRecursoProfesorDto) {
    return this.recursoProfesorService.update(+id, updateRecursoProfesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoProfesorService.remove(+id);
  }
}
