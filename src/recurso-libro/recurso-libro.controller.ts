import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe, } from '@nestjs/common';
import { RecursoLibroService } from './recurso-libro.service';
import { CreateRecursoLibroDto } from './dto/create-recurso-libro.dto';
import { UpdateRecursoLibroDto } from './dto/update-recurso-libro.dto';

@Controller('recurso-libro') // => /api/recurso-libro
export class RecursoLibroController {
  constructor(private readonly recursoLibroService: RecursoLibroService) { }

  @Post()
  async create(@Body() createRecursoLibroDto: CreateRecursoLibroDto) {
    const created = await this.recursoLibroService.create(createRecursoLibroDto);
    return { ok: true, data: created };
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    const { items, total } = await this.recursoLibroService.findAll(page, limit);
    return { ok: true, data: items, meta: { page, limit, total } };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.recursoLibroService.findOne(id);
    return { ok: true, data };
  }

  // (Opcional para tu práctica) — los dejo operativos
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecursoLibroDto: UpdateRecursoLibroDto,
  ) {
    const data = await this.recursoLibroService.update(id, updateRecursoLibroDto);
    return { ok: true, data };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const data = await this.recursoLibroService.remove(id);
    return { ok: true, data };
  }
}
