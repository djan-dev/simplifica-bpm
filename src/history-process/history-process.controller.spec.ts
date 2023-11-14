import { Test, TestingModule } from '@nestjs/testing';
import { HistoryProcessController } from './history-process.controller';
import { HistoryProcessService } from './history-process.service';

describe('HistoryProcessController', () => {
  let controller: HistoryProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryProcessController],
      providers: [HistoryProcessService],
    }).compile();

    controller = module.get<HistoryProcessController>(HistoryProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
