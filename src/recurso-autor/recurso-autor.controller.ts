import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe, } from '@nestjs/common';
import { RecursoAutorService } from './recurso-autor.service';
import { CreateRecursoAutorDto } from './dto/create-recurso-autor.dto';
import { UpdateRecursoAutorDto } from './dto/update-recurso-autor.dto';

@Controller('recurso-autor') // => /api/recurso-autor por el prefijo global
export class RecursoAutorController {
  constructor(private readonly recursoAutorService: RecursoAutorService) { }

  @Post()
  async create(@Body() createRecursoAutorDto: CreateRecursoAutorDto) {
    const created = await this.recursoAutorService.create(createRecursoAutorDto);
    return { ok: true, data: created };
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    const { items, total } = await this.recursoAutorService.findAll(page, limit);
    return { ok: true, data: items, meta: { page, limit, total } };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.recursoAutorService.findOne(id);
    return { ok: true, data };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecursoAutorDto: UpdateRecursoAutorDto,
  ) {
    const data = await this.recursoAutorService.update(id, updateRecursoAutorDto);
    return { ok: true, data };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const data = await this.recursoAutorService.remove(id);
    return { ok: true, data };
  }
}
