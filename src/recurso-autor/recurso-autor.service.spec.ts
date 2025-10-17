import { Test, TestingModule } from '@nestjs/testing';
import { RecursoAutorService } from './recurso-autor.service';

describe('RecursoAutorService', () => {
  let service: RecursoAutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoAutorService],
    }).compile();

    service = module.get<RecursoAutorService>(RecursoAutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
