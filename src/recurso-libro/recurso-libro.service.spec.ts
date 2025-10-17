import { Test, TestingModule } from '@nestjs/testing';
import { RecursoLibroService } from './recurso-libro.service';

describe('RecursoLibroService', () => {
  let service: RecursoLibroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoLibroService],
    }).compile();

    service = module.get<RecursoLibroService>(RecursoLibroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
