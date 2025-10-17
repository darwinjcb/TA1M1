import { Test, TestingModule } from '@nestjs/testing';
import { RecursoLibroController } from './recurso-libro.controller';
import { RecursoLibroService } from './recurso-libro.service';

describe('RecursoLibroController', () => {
  let controller: RecursoLibroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecursoLibroController],
      providers: [RecursoLibroService],
    }).compile();

    controller = module.get<RecursoLibroController>(RecursoLibroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
