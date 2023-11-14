import { Test, TestingModule } from '@nestjs/testing';
import { HistoryProcessService } from './history-process.service';

describe('HistoryProcessService', () => {
  let service: HistoryProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryProcessService],
    }).compile();

    service = module.get<HistoryProcessService>(HistoryProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
