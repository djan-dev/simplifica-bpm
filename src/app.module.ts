import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HistoryProcessModule } from './history-process/history-process.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HistoryProcessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
