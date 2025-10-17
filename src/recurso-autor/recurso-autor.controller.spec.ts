import { Test, TestingModule } from '@nestjs/testing';
import { RecursoAutorController } from './recurso-autor.controller';
import { RecursoAutorService } from './recurso-autor.service';

describe('RecursoAutorController', () => {
  let controller: RecursoAutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecursoAutorController],
      providers: [RecursoAutorService],
    }).compile();

    controller = module.get<RecursoAutorController>(RecursoAutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
