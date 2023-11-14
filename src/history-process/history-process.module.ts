import { Module } from '@nestjs/common';
import { HistoryProcessService } from './history-process.service';
import { HistoryProcessController } from './history-process.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistoryProcessRepository } from './repositories/historys-process.repository';

@Module({
  controllers: [HistoryProcessController],
  providers: [HistoryProcessService, PrismaService, HistoryProcessRepository],
})
export class HistoryProcessModule {}
